'use client'

import { useEffect, useRef } from 'react'

type LatLng = { lat: number; lng: number }

declare global {
  interface Window {
    google: any
  }
}

type Props = {
  /** 좌표 배열 (러닝 기록 GPS 트랙 등) */
  path: LatLng[]
  height?: number | string
  isSdkReady: boolean
}

export default function PolylineTrackMap({ path, height = 360, isSdkReady }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isSdkReady) return
    if (!ref.current) return
    if (!window.google) return
    if (!path?.length) return

    const google = window.google

    const map = new google.maps.Map(ref.current, {
      center: path[0],
      zoom: 15,
    })

    const polyline = new google.maps.Polyline({
      path,
      map,
      strokeOpacity: 1,
      strokeWeight: 4,
    })

    // 경로 전체 보이게 fitBounds
    const bounds = new google.maps.LatLngBounds()
    path.forEach(p => bounds.extend(p))
    map.fitBounds(bounds)

    return () => {
      polyline.setMap(null)
    }
  }, [isSdkReady, path])

  return <div ref={ref} style={{ width: '100%', height }} />
}
