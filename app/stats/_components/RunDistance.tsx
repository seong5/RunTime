'use client'

import { useEffect, useRef, useState } from 'react'
import { KakaoMapLoad } from '@/libs/kakao-map/kakaoMapLoad'

export type LatLng = { lat: number; lng: number }

type Props = {
  path: LatLng[]
  height?: number | string
  showStartEndMarkers?: boolean
  onDistance?: (meters: number) => void
  distanceMetersOverride?: number
}

export default function RunDistance({
  path,
  height = 360,
  showStartEndMarkers = true,
  onDistance,
  distanceMetersOverride,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [meters, setMeters] = useState<number | null>(null)

  useEffect(() => {
    const safePath = path ?? []

    KakaoMapLoad({ libraries: ['services'] })
      .then(() => {
        if (!mapRef.current) return

        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(
            safePath[0]?.lat ?? 37.5665,
            safePath[0]?.lng ?? 126.978
          ),
          level: 4,
        })

        if (safePath.length >= 2) {
          const linePath = safePath.map(p => new window.kakao.maps.LatLng(p.lat, p.lng))
          const poly = new window.kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 5,
            strokeColor: '#FF0000',
            strokeOpacity: 0.7,
            strokeStyle: 'solid',
          })
          poly.setMap(map)

          const len = poly.getLength()
          const finalMeters =
            typeof distanceMetersOverride === 'number' ? distanceMetersOverride : len
          setMeters(finalMeters)

          if (!distanceMetersOverride) {
            onDistance?.(len)
          }

          if (showStartEndMarkers) {
            new window.kakao.maps.Marker({ position: linePath[0] }).setMap(map)
            new window.kakao.maps.Marker({ position: linePath[linePath.length - 1] }).setMap(map)
          }
        } else if (typeof distanceMetersOverride === 'number') {
          // 경로 없이 override만 표시
          setMeters(distanceMetersOverride)
        }
      })
      .catch(err => {
        console.error('Kakao Map load error:', err)
      })
  }, [path, onDistance, showStartEndMarkers, distanceMetersOverride])

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height }} />
      {meters !== null && (
        <div className="mt-2 text-center font-bold">총 거리: {(meters / 1000).toFixed(2)} km</div>
      )}
    </div>
  )
}
