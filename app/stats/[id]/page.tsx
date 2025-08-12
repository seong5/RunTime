import { notFound } from 'next/navigation'
import { runningRecords } from '@/mocks/runningRecord'
import { formatKoreanDate } from '@/utils/dateUtils'

type Props = { params: Promise<{ id: string }> }

export default async function DetailPage({ params }: Props) {
  const { id } = await params
  const record = runningRecords.find(r => r.id === Number(id))
  if (!record) return notFound()

  return (
    <main className="px-[20px] md:px-[30px] my-4">
      <h1 className="text-[20px] md:text-[25px] text-green font-semibold">
        {formatKoreanDate(record.date)}
      </h1>
      <div className="mt-4">
        <div className="text-gray-400 text-[15px] md:text-[20px] font-semibold">
          달린 거리{' '}
          <div className="text-gray-950 text-[30px] md:text-[40px] font-bold">
            {record.distance}
          </div>
        </div>
        <div className="flex flex-row gap-10 md:gap-20">
          <div className="text-gray-400 font-semibold text-[15px] md:text-[20px] text-center">
            평균 페이스{' '}
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">{record.pace}</div>
          </div>
          <div className="text-gray-400 font-semibold text-center text-[15px] md:text-[20px] ">
            시간{' '}
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">{record.time}</div>
          </div>
          <div className="text-gray-400 font-semibold text-center text-[15px] md:text-[20px] ">
            칼로리{' '}
            <div className="text-gray-950 text-[20px] md:text-[25px] font-bold">
              {record.calories}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
