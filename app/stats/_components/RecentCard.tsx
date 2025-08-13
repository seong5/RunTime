'use client'
import { formatKoreanDate } from '@/utils/dateUtils'
import { useRouter } from 'next/navigation'
import Polyline, { LatLng } from '@/app/stats/_components/Polyline'

type RecentCardProps = {
  id: number
  distance: number
  pace: string
  time: string
  date: string
  gps: LatLng[] // 추가: 경로 데이터
}

export default function RecentCard({ distance, pace, time, date, id, gps }: RecentCardProps) {
  const router = useRouter()

  return (
    <article
      className="rounded-[16px] bg-gray-100 p-4 mb-5 cursor-pointer"
      onClick={() => router.push(`/stats/${id}`)}
    >
      <div className="text-[20px] md:text-[25px] font-bold my-2">{formatKoreanDate(date)}</div>

      {/* 여기서 썸네일 렌더링 */}
      <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] flex items-center justify-center">
        <Polyline
          variant="thumbnail"
          path={gps}
          width={200}
          height={200}
          padding={10}
          strokeWidth={5}
          strokeColor="#7c3aed"
          showEndpoints={false}
          className="rounded-[16px] bg-white"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="flex flex-col items-start">
          <span className="text-[14px] md:text-[16px] text-gray-400">Km</span>
          <h2 className="text-[18px] md:text-[24px] font-semibold">{distance}</h2>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[14px] md:text-[16px] text-gray-400">페이스</span>
          <h2 className="text-[18px] md:text-[24px] font-semibold">{pace}</h2>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[14px] md:text-[16px] text-gray-400">시간</span>
          <h2 className="text-[18px] md:text-[24px] font-semibold">{time}</h2>
        </div>
      </div>
    </article>
  )
}
