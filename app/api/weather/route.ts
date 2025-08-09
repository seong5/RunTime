import { NextResponse } from 'next/server'
import axios from 'axios'

const WEATHER_ENDPOINT = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'

/**
 * KMA 초단기실황(getUltraSrtNcst) 발표 시각은 통상 매 시각 + 약 40분 이후 공개됩니다.
 * 안전하게 "현재 KST에서 40분 뺀 시각의 정시(HH00)"를 기본값으로 사용합니다.
 * (예: 12:25 → 11:00 / 12:50 → 12:00)
 */
function getLatestBaseKST() {
  const now = new Date()
  // KST(UTC+9)로 변환
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const kstNow = new Date(utc + 9 * 60 * 60000)

  const latest = new Date(kstNow.getTime() - 40 * 60000) // 40분 감산
  const yyyy = String(latest.getFullYear())
  const mm = String(latest.getMonth() + 1).padStart(2, '0')
  const dd = String(latest.getDate()).padStart(2, '0')
  const HH = String(latest.getHours()).padStart(2, '0')

  return {
    base_date: `${yyyy}${mm}${dd}`, // yyyymmdd
    base_time: `${HH}00`, // HHmm
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  // 클라이언트가 넘기면 그것 사용, 아니면 최신값 자동 계산
  const nx = searchParams.get('nx') ?? '55'
  const ny = searchParams.get('ny') ?? '127'
  const base_date = searchParams.get('base_date')
  const base_time = searchParams.get('base_time')

  const { base_date: autoDate, base_time: autoTime } = getLatestBaseKST()

  const serviceKey = process.env.WEATHER_SERVICE_KEY
  if (!serviceKey) {
    return NextResponse.json({ error: 'Missing WEATHER_SERVICE_KEY' }, { status: 500 })
  }

  try {
    const { data } = await axios.get(WEATHER_ENDPOINT, {
      params: {
        serviceKey,
        pageNo: 1,
        numOfRows: 200,
        dataType: 'JSON',
        base_date: base_date ?? autoDate,
        base_time: base_time ?? autoTime,
        nx,
        ny,
      },
    })

    return NextResponse.json(data)
  } catch (err: any) {
    console.error('WEATHER API ERROR:', err?.response?.data || err?.message)
    return NextResponse.json(
      { error: 'Weather fetch failed', detail: err?.message },
      { status: 500 }
    )
  }
}
