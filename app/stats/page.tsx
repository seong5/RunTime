'use client'
import PeriodFilter from './_components/PeriodFilter'

export default function Stats() {
  return (
    <section>
      <PeriodFilter onChange={val => console.log('선택', val)} />
      <div>날짜</div>
      <div>뛴거리</div>
      <div>그래프</div>
      <div>최근활동</div>
    </section>
  )
}
