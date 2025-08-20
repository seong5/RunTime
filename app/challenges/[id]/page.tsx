import { notFound } from 'next/navigation'
import { challenges } from '@/mocks/challenges'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ChallengeDetailPage({ params }: Props) {
  const { id } = await params
  const challenge = challenges.find(c => c.id === Number(id))

  if (!challenge) return notFound()

  return (
    <main className="px-[20px] py-[20px]">
      <h1 className="text-[30px] md:text-[35px] text-orange font-bold">{challenge.name}</h1>
      {challenge.imageUrl && (
        <img src={challenge.imageUrl} alt={challenge.name} className="rounded-[16px] w-full" />
      )}
      <p className="text-[20px] md:text-[30px] font-semibold">{challenge.distance} km</p>
      <p className="text-[20px] md:text-[30px] font-semibold">{challenge.status}</p>
    </main>
  )
}
