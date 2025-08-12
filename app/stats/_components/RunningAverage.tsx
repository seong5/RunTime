'use client'

import { useMemo } from 'react'
import type { PeriodType } from './PeriodFilter'
import { runningRecords } from '@/mocks/runningRecord'
import { toLocalDate, hmsToSec, fmtHMS, fmtPace, getRange } from '@/utils/dateUtils'

export default function RunningAverage({ period }: { period: PeriodType }) {
  const filtered = useMemo(() => {
    const { start, end } = getRange(period, new Date())
    if (!start || !end) return runningRecords
    return runningRecords.filter(r => {
      const d = toLocalDate(r.date)
      return d >= start && d <= end
    })
  }, [period])

  const stats = useMemo(() => {
    const count = filtered.length
    const totalKm = Number(filtered.reduce((s, r) => s + r.distance, 0).toFixed(2))
    const totalSec = filtered.reduce((s, r) => s + hmsToSec(r.time), 0)
    const avgKmPerRun = count ? Number((totalKm / count).toFixed(2)) : 0
    const avgSecPerRun = count ? totalSec / count : 0
    const avgPaceSecPerKm = totalKm > 0 ? totalSec / totalKm : Infinity
    const totalCal = filtered.reduce((s, r) => s + r.calories, 0)
    return { count, totalKm, totalSec, avgKmPerRun, avgSecPerRun, avgPaceSecPerKm, totalCal }
  }, [filtered])

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-5 text-gray-400 bg-gray-50 w-full rounded-[20px] p-5 md:p-10">
      <div>
        러닝 횟수{' '}
        <h2 className="text-[30px] font-bold text-gray-950">
          {stats.count}
          <span className="text-gray-400 font-normal text-[20px] ml-2">회</span>
        </h2>
      </div>
      <div>
        평균 페이스{' '}
        <h2 className="text-[30px] font-bold text-gray-950">
          {fmtPace(stats.avgPaceSecPerKm)}{' '}
          <span className="text-gray-400 font-normal text-[20px]">km</span>
        </h2>
      </div>
      <div>
        시간{' '}
        <h2 className="text-[30px] font-bold text-gray-950">
          {fmtHMS(stats.totalSec)} <span className="text-gray-400 font-normal text-[20px]">분</span>
        </h2>
      </div>
      <div>
        평균 거리{' '}
        <h2 className="text-[30px] font-bold text-gray-950">
          {stats.avgKmPerRun} <span className="text-gray-400 font-normal text-[20px]">km</span>
        </h2>
      </div>
    </section>
  )
}
