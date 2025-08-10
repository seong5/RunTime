'use client'

import { useEffect, useMemo, useState } from 'react'
import api from '@/libs/axios'

type Item = {
  baseDate: string
  baseTime: string
  category: string
  nx: number
  ny: number
  obsrValue: string
}

type WeatherAPI = {
  response: {
    header: { resultCode: string; resultMsg: string }
    body: {
      dataType: 'JSON'
      items: { item: Item[] }
      pageNo: number
      numOfRows: number
      totalCount: number
    }
  }
}

const PTY_MAP: Record<string, string> = {
  '0': '강수 없음',
  '1': '비',
  '2': '비/눈',
  '3': '눈',
  '4': '소나기',
  '5': '빗방울',
  '6': '빗방울/눈날림',
  '7': '눈날림',
}

function degToCompass(deg: number) {
  const dirs = [
    '북',
    '북북동',
    '북동',
    '동북동',
    '동',
    '동남동',
    '남동',
    '남남동',
    '남',
    '남남서',
    '남서',
    '서남서',
    '서',
    '서북서',
    '북서',
    '북북서',
  ]
  return dirs[Math.round(deg / 22.5) % 16]
}

function fmtDate(baseDate: string, baseTime: string) {
  // baseDate: yyyymmdd, baseTime: HHmm
  const y = baseDate.slice(0, 4)
  const m = baseDate.slice(4, 6)
  const d = baseDate.slice(6, 8)
  const hh = baseTime.slice(0, 2)
  const mm = baseTime.slice(2, 4)
  return `${y}-${m}-${d} ${hh}:${mm} KST`
}

export default function WeatherCast() {
  const [raw, setRaw] = useState<WeatherAPI | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        try {
          const lat = pos.coords.latitude
          const lon = pos.coords.longitude

          // 위경도를 그대로 API에 전달
          const res = await api.get<WeatherAPI>('/api/weather', {
            params: { lat, lon },
          })
          setRaw(res.data)
        } catch (e: any) {
          setError(e?.response?.data?.error || e?.message || '요청 실패')
        }
      },
      err => {
        setError('위치 정보를 가져올 수 없습니다: ' + err.message)
      }
    )
  }, [])

  const parsed = useMemo(() => {
    if (!raw) return null
    const items = raw.response.body.items.item

    const map = items.reduce<Record<string, Item>>((acc, cur) => {
      acc[cur.category] = cur
      return acc
    }, {})

    const baseDate = items[0]?.baseDate ?? ''
    const baseTime = items[0]?.baseTime ?? ''

    const T1H = map['T1H']?.obsrValue ? Number(map['T1H'].obsrValue) : null // 기온(°C)
    const REH = map['REH']?.obsrValue ? Number(map['REH'].obsrValue) : null // 습도(%)
    const RN1 = map['RN1']?.obsrValue ? Number(map['RN1'].obsrValue) : null // 1시간 강수량(mm)
    const PTY = map['PTY']?.obsrValue ?? '0' // 강수형태
    const WSD = map['WSD']?.obsrValue ? Number(map['WSD'].obsrValue) : null // 풍속(m/s)
    const VEC = map['VEC']?.obsrValue ? Number(map['VEC'].obsrValue) : null // 풍향(°)
    const UUU = map['UUU']?.obsrValue ? Number(map['UUU'].obsrValue) : null // 바람U
    const VVV = map['VVV']?.obsrValue ? Number(map['VVV'].obsrValue) : null // 바람V

    return {
      base: fmtDate(baseDate, baseTime),
      nx: items[0]?.nx,
      ny: items[0]?.ny,
      temp: T1H,
      humidity: REH,
      rain1h: RN1,
      precipType: PTY_MAP[PTY] ?? '강수 정보 없음',
      windSpeed: WSD,
      windDirDeg: VEC,
      windDirText: VEC != null ? degToCompass(VEC) : null,
      u: UUU,
      v: VVV,
    }
  }, [raw])

  if (error) return <div>에러: {error}</div>
  if (!parsed) return <div>불러오는 중…</div>

  return (
    <div className="p-5">
      <h2 className="text-[22px] md:text-[32px] font-bold">오늘의 날씨</h2>
      <p className="text-[10px] md:text-[13px] text-gray-500">{parsed.base}</p>

      <div className="flex flex-col justify-center items-center">
        <div className="text-gray-500 font-semibold text-[20px] md:text-[40px]">현재 기온</div>
        <div className="text-[30px] md:text-[60px] font-semibold">
          {parsed.temp ?? '-'}
          <span className="text-[20px] md:text-[25px]">°C</span>
        </div>
        <div className="flex flex-row w-full mt-10 gap-10 md:gap-20">
          <div className="rounded-2xl bg-green-100 w-full text-center text-green-600 p-5">
            <div className="text-green-700 text-[20px] md:text-[30px]">습도</div>
            <div className="text-[30px] md:text-[50px] font-semibold">
              {parsed.humidity ?? '-'}
              <span className="text-[20px]">%</span>
            </div>
          </div>

          <div className="rounded-2xl w-full text-center bg-blue-100 p-5">
            <div className="text-blue-500 text-[20px] md:text-[30px]">강수</div>
            <div className="text-[30px] md:text-[50px] text-blue-500 font-semibold">
              {parsed.rain1h ?? 0}
              <span className="text-base">mm</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">{parsed.precipType}</div>
          </div>

          <div className="rounded-2xl bg-yellow-100 w-full text-center p-5">
            <div className="text-yellow-500 text-[20px] md:text-[30px]">바람</div>
            <div className="text-[30px] md:text-[50px] font-semibold text-yellow-500">
              {parsed.windSpeed ?? '-'}
              <span className="text-base text-yellow-500">m/s</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {parsed.windDirDeg != null ? `${parsed.windDirText} (${parsed.windDirDeg}°)` : '-'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
