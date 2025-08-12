import type { PeriodType } from '@/app/stats/_components/PeriodFilter'

// YYYY-MM-DD  로컬 자정 Date 객체
export const toLocalDate = (ymd: string) => new Date(`${ymd}T00:00:00`)

// HH:MM:SS  초(second) 단위
export const hmsToSec = (hms: string) => {
  const [h, m, s] = hms.split(':').map(Number)
  return (h || 0) * 3600 + (m || 0) * 60 + (s || 0)
}

// 초  H:MM:SS 또는 M:SS 포맷
export const fmtHMS = (sec: number) => {
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = Math.floor(sec % 60)
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    : `${m}:${String(s).padStart(2, '0')}`
}

// 페이스(sec/km)  M:SS/km
export const fmtPace = (secPerKm: number) => {
  if (!isFinite(secPerKm) || secPerKm <= 0) return '-'
  const m = Math.floor(secPerKm / 60)
  const s = Math.round(secPerKm % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

// 기간별 시작/끝 날짜 범위 계산
export function getRange(period: PeriodType, today = new Date()) {
  if (period === '전체') return { start: null as Date | null, end: null as Date | null }

  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999)

  if (period === '주') {
    const dow = today.getDay()
    const diffToMon = (dow + 6) % 7 // 월요일=0 기준
    const start = new Date(today)
    start.setDate(today.getDate() - diffToMon)
    start.setHours(0, 0, 0, 0)
    return { start, end }
  }

  if (period === '월') {
    const start = new Date(today.getFullYear(), today.getMonth(), 1)
    start.setHours(0, 0, 0, 0)
    return { start, end }
  }

  // 년
  const start = new Date(today.getFullYear(), 0, 1)
  start.setHours(0, 0, 0, 0)
  return { start, end }
}

// 년 월 일 로 바꾸는 함수
export function formatKoreanDate(dateStr: string) {
  const date = new Date(dateStr)
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}
