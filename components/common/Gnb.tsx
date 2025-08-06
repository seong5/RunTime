import Link from 'next/link'

export default function Gnb() {
  return (
    <div className="flex flex-row gap-10 bg-navy text-[12px] md:text-[16px] text-white rounded-[12px] px-5 py-4 md:px-10 md:py-8">
      <p className="mr-10">RunTime</p>
      <Link href="/stats">내 기록</Link>
      <Link href="/weather">오늘의 날씨</Link>
      <Link href="/challenges">챌린지</Link>
      <Link href="/songrec">플레이리스트</Link>
    </div>
  )
}
