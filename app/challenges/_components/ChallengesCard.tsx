import { challenges } from '@/mocks/challenges'

export default function ChallengesCard() {
  return (
    <section className="bg-orange p-4 m-4 rounded-[16px]">
      {challenges.map(challenge => (
        <div key={challenge.id} className="flex flex-row items-center gap-5 md:gap-10">
          <div className="bg-white rounded-[16px] w-[100px] md:w-[180px] h-[100px] md:h-[180px]">
            챌린지이미지
          </div>
          <div className="text-white">
            <div className="text-[20px] md:text-[45px] font-bold my-2 md:my-4">
              {challenge.name}
            </div>
            <div className="text-[15px] md:text-[25px] font-semibold">{challenge.distance}km</div>
            <div className="text-[15px] md:text-[25px] font-semibold">{challenge.success}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
