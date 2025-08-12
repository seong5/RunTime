'use client'

import { useState } from 'react'
import PeriodFilter, { type PeriodType } from './_components/PeriodFilter'
import RunningAverage from './_components/RunningAverage'
import AverageChart from './_components/AverageChart'
import RecentRunning from './_components/RecentRunning'

export default function Stats() {
  const [period, setPeriod] = useState<PeriodType>('주')

  return (
    <section className="px-[20px] md:px-[30px] space-y-6">
      <PeriodFilter value={period} onChange={setPeriod} />
      <RunningAverage period={period} />
      <AverageChart period={period} />
      <RecentRunning />
    </section>
  )
}
