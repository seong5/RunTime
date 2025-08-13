'use client'

import { useEffect, useMemo, useRef } from 'react'

export type LatLng = { lat: number; lng: number }

declare global {
  interface Window {
    google: any
  }
}

type BaseProps = {
  /** 공통 */
  path?: LatLng[]
  strokeWidth?: number
  strokeColor?: string // map 모드에서는 strokeColor로, thumbnail은 Tailwind 없이 직접 색 지정
  className?: string // 외곽 컨테이너 스타일(썸네일 SVG에 적용)
}

type ThumbnailProps = BaseProps & {
  variant?: 'thumbnail' | 'map'
  /** 썸네일 전용 */
  width?: number
  height?: number
  padding?: number
  showEndpoints?: boolean
}

type MapProps = BaseProps & {
  /** 지도 전용 */
  isSdkReady?: boolean
  height?: number | string
  zoom?: number
}

type Props = ThumbnailProps & MapProps

export default function Polyline({
  // 공통
  path = [],
  strokeWidth = 4,
  strokeColor,
  className = 'rounded-[16px] bg-white',
  // 모드
  variant = 'thumbnail',
  // 썸네일 전용
  width = 200,
  height = 200,
  padding = 10,
  showEndpoints = false,
  // 지도 전용
  isSdkReady,
  zoom = 15,
}: Props) {
  // Thumbnail (SVG) 모드
  if (variant === 'thumbnail') {
    const { points, start, end } = useMemo(() => {
      if (!path?.length) return { points: '', start: null as any, end: null as any }

      const lats = path.map(p => p.lat)
      const lngs = path.map(p => p.lng)
      const minLat = Math.min(...lats),
        maxLat = Math.max(...lats)
      const minLng = Math.min(...lngs),
        maxLng = Math.max(...lngs)
      const w = Math.max(1e-9, maxLng - minLng)
      const h = Math.max(1e-9, maxLat - minLat)

      const innerW = width - padding * 2
      const innerH = height - padding * 2
      const scale = Math.min(innerW / w, innerH / h)

      const toXY = (p: LatLng) => ({
        x: (p.lng - minLng) * scale + padding,
        y: (maxLat - p.lat) * scale + padding, // lat 축 반전
      })

      const pts = path.map(toXY)
      const start = pts[0]
      const end = pts[pts.length - 1]
      const d = pts.map(p => `${p.x},${p.y}`).join(' ')

      return { points: d, start, end }
    }, [path, width, height, padding])

    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className}
        aria-label="polyline-thumbnail"
      >
        <rect x={0} y={0} width={width} height={height} rx={16} ry={16} fill="white" />
        {path?.length ? (
          <>
            <polyline
              points={points}
              fill="none"
              stroke={strokeColor || '#7c3aed'}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {showEndpoints && start && end && (
              <>
                <circle cx={start.x} cy={start.y} r={4} fill="#22c55e" />
                <circle cx={end.x} cy={end.y} r={4} fill="#ef4444" />
              </>
            )}
          </>
        ) : (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill="#9ca3af"
          >
            경로 없음
          </text>
        )}
      </svg>
    )
  }

  // Map (Google Maps) 모드
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isSdkReady || !ref.current || !window.google || !path?.length) return

    const g = window.google
    const map = new g.maps.Map(ref.current, {
      center: path[0],
      zoom,
    })

    const polyline = new g.maps.Polyline({
      path,
      map,
      strokeOpacity: 1,
      strokeWeight: strokeWidth,
      ...(strokeColor ? { strokeColor } : {}),
    })

    const bounds = new g.maps.LatLngBounds()
    path.forEach(p => bounds.extend(p))
    map.fitBounds(bounds)

    return () => polyline.setMap(null)
  }, [isSdkReady, path, zoom, strokeWidth, strokeColor])

  // height는 map 모드에서 컨테이너 높이
  return <div ref={ref} style={{ width: '100%', height }} />
}
