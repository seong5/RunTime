'use client'
import PeriodFilter from './_components/PeriodFilter'

export default function Stats() {
  return (
    <section className="px-[20px] md:px-[30px]">
      <PeriodFilter onChange={val => console.log('선택', val)} />
      <div>날짜</div>
      <div>뛴거리</div>
      <div>그래프</div>
      <div>최근활동</div>
    </section>
  )
}
