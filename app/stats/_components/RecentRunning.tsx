import { runningRecords } from '@/mocks/runningRecord'
import RecentCard from './RecentCard'

export default function RecentRunning() {
  const sorted = [...runningRecords].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sorted.map(r => (
        <RecentCard
          key={r.id}
          id={r.id}
          distance={r.distance}
          pace={r.pace}
          time={r.time}
          date={r.date}
          gps={r.gps}
        />
      ))}
    </section>
  )
}
