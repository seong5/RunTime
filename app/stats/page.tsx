'use client'

import { useState } from 'react'
import PeriodFilter, { type PeriodType } from './_components/PeriodFilter'
import RunningAverage from './_components/RunningAverage'

export default function Stats() {
  const [period, setPeriod] = useState<PeriodType>('주')

  return (
    <section className="px-[20px] md:px-[30px] space-y-6">
      <PeriodFilter value={period} onChange={setPeriod} />
      <RunningAverage period={period} />
      <div>그래프</div>
      <div>최근활동</div>
    </section>
  )
}
