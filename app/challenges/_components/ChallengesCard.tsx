import { type Challenges } from '@/mocks/challenges'
import Image from 'next/image'
import Link from 'next/link'

type Props = { challenge: Challenges }

export default function ChallengeCard({ challenge }: Props) {
  return (
    <Link href={`/challenges/${challenge.id}`}>
      <div className="flex flex-row bg-white card-shadow rounded-[16px] items-center gap-5 md:gap-10">
        <div className="bg-white rounded-[16px] w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex items-center justify-center">
          <Image
            src={challenge.imageUrl}
            alt={challenge.name}
            width={180}
            height={180}
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
        <div className="text-gray-950">
          <div className="text-[20px] md:text-[45px] font-semibold my-1 md:my-2">
            {challenge.name}
          </div>
          <div className="text-[15px] md:text-[25px] font-semibold">{challenge.distance}km</div>
          <div className="text-[15px] md:text-[25px] font-semibold">{challenge.status}</div>
        </div>
      </div>
    </Link>
  )
}
