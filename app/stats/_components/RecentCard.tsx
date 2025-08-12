import { formatKoreanDate } from '@/utils/dateUtils'

type RecentCardProps = {
  distance: number
  pace: string
  time: string
  date: string
}

export default function RecentCard({ distance, pace, time, date }: RecentCardProps) {
  return (
    <article className="rounded-[16px] bg-gray-100 p-4 mb-5">
      <div className="text-[20px] md:text-[25px] font-bold my-2">{formatKoreanDate(date)}</div>
      <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-white rounded-[16px] flex items-center justify-center">
        이미지
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
