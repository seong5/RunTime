import { notFound } from 'next/navigation'
import { runningRecords } from '@/mocks/runningRecord'
import { formatKoreanDate } from '@/utils/dateUtils'

type Props = { params: { id: string } }

export default function DetailPage({ params }: Props) {
  const { id } = params
  const record = runningRecords.find(r => r.id === Number(id))
  if (!record) return notFound()

  const km = parseFloat(String(record.distance).replace(/[^\d.]/g, '')) || 0
  const overrideMeters = Math.round(km * 1000)

  return (
    <main className="px-[20px] md:px-[30px] my-4">
      <h1 className="text-[20px] md:text-[25px] text-green font-semibold">
        {formatKoreanDate(record.date)}
      </h1>

      <div className="mt-4">
        <div className="text-gray-400 text-[15px] md:text-[20px] font-semibold">
          달린 거리{' '}
          <div className="text-gray-950 text-[30px] md:text-[40px] pb-4 font-bold border-b border-gray-300">
            {record.distance}
          </div>
        </div>
      </div>
    </main>
  )
}
