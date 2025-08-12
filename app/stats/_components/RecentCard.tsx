import { runningRecords } from '@/mocks/runningRecord'

export default function RecentCard() {
  const recentRecord = [...runningRecords].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0]

  return (
    <article className="rounded-[16px] bg-gray-100 p-4 mb-5">
      <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-white rounded-[16px]">
        이미지
      </div>
      <div className="grid grid-cols-3 gap-4 m-4 text-center">
        <div className="flex flex-col items-start">
          <span className="text-[14px] md:text-[16px] font-normal text-gray-400">Km</span>
          <h2 className="text-[18px] md:text-[24px] font-semibold">{recentRecord.distance}</h2>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[14px] md:text-[16px] font-normal text-gray-400">페이스</span>
          <h2 className="text-[18px] md:text-[24px] font-semibold">{recentRecord.pace}</h2>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-[14px] md:text-[16px] font-normal text-gray-400">시간</span>
          <h2 className="text-[18px] md:text-[24px] font-semibold">{recentRecord.time}</h2>
        </div>
      </div>
    </article>
  )
}
