import type { Challenges } from '@/mocks/challenges'

type Props = { challenge: Challenges }

export default function ChallengeCard({ challenge }: Props) {
  return (
    <div className="flex flex-row bg-orange rounded-[16px] items-center gap-5 md:gap-10">
      <div className="bg-white rounded-[16px] w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex items-center justify-center">
        챌린지이미지
      </div>
      <div className="text-white">
        <div className="text-[20px] md:text-[45px] font-bold my-1 md:my-2">{challenge.name}</div>
        <div className="text-[15px] md:text-[25px] font-semibold">{challenge.distance}km</div>
        <div className="text-[15px] md:text-[25px] font-semibold">{challenge.success}</div>
      </div>
    </div>
  )
}
