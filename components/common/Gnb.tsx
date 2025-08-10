import Link from 'next/link'

export default function Gnb() {
  return (
    <div className="flex flex-row gap-4 md:gap-10 bg-navy text-[10px] md:text-[16px] text-white px-5 py-4 md:px-10 md:py-8">
      <Link href="/" className="mr-3 md:mr-10">
        RunTime
      </Link>
      <Link href="/stats">내 기록</Link>
      <Link href="/weather">오늘의 날씨</Link>
      <Link href="/challenges">챌린지</Link>
      <Link href="/songrec">플레이리스트</Link>
    </div>
  )
}
