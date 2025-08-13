'use client'

import { useState } from 'react'
import Script from 'next/script'
import Polyline, { LatLng } from './Polyline'

type Props = {
  gps?: LatLng[]
  height?: number
}

export default function RouteMap({ gps = [], height = 420 }: Props) {
  const [ready, setReady] = useState(false)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    // 개발 중 바로 체크
    return (
      <div className="text-red-600 bg-red-50 p-3 rounded-md">
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY가 설정되지 않았습니다.
      </div>
    )
  }

  return (
    <div className="w-full">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&region=KR&language=ko`}
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
        onError={e => console.error('Google Maps SDK 로드 실패', e)}
      />
      {ready && gps?.length ? (
        <Polyline
          variant="map"
          path={gps}
          isSdkReady={ready}
          height={height}
          zoom={15}
          strokeWidth={5}
          strokeColor="#d97706"
        />
      ) : (
        <div className="h-[420px] flex items-center justify-center rounded-md bg-gray-100 text-gray-500">
          {ready ? '경로 데이터가 없습니다.' : '지도를 불러오는 중...'}
        </div>
      )}
    </div>
  )
}
