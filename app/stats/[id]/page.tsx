import { notFound } from 'next/navigation'
import { runningRecords } from '@/mocks/runningRecord'
import { formatKoreanDate } from '@/utils/dateUtils'
import RouteMap from '@/app/stats/_components/RouteMap'

type Props = { params: { id: string } }

export default async function DetailPage({ params }: Props) {
  const { id } = await params
  const record = runningRecords.find(r => r.id === Number(id))
  if (!record) return notFound()

  return (
    <main className="px-[20px] md:px-[30px] my-4">
      <h1 className="text-[20px] md:text-[25px] text-green-600 font-semibold">
        {formatKoreanDate(record.date)}
      </h1>

      <div className="mt-4">
        <div className="text-gray-400 text-[15px] md:text-[20px] font-semibold">
          달린 거리
          <div className="text-gray-950 text-[30px] md:text-[40px] pb-4 font-bold border-b border-gray-300">
            {record.distance}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-20">
          <div className="text-gray-400 font-semibold text-[15px] md:text-[20px] text-center">
            평균 페이스
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">{record.pace}</div>
          </div>
          <div className="text-gray-400 font-semibold text-center text-[15px] md:text-[20px]">
            시간
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">{record.time}</div>
          </div>
          <div className="text-gray-400 font-semibold text-center text-[15px] md:text-[20px]">
            칼로리
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">
              {record.calories}
            </div>
          </div>
          <div className="text-gray-400 font-semibold text-center text-[15px] md:text-[20px]">
            케이던스
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">
              {record.cadence}
            </div>
          </div>
        </div>
      </div>

      {/* 지도 섹션 */}
      <div className="mt-6">
        <RouteMap gps={record.gps} height={420} />
      </div>
    </main>
  )
}
