'use client'
import PeriodFilter from './_components/PeriodFilter'
import RunningAverage from './_components/RunningAverage'

export default function Stats() {
  return (
    <section className="px-[20px] md:px-[30px]">
      <PeriodFilter onChange={val => console.log('선택', val)} />
      <RunningAverage />
      <div>그래프</div>
      <div>최근활동</div>
    </section>
  )
}
