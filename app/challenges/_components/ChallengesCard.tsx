import { challenges } from '@/mocks/challenges'

export default function ChallengesCard() {
  return (
    <section>
      {challenges.map(challenge => (
        <div key={challenge.id}>
          <div>{challenge.name}</div>
          <div>챌린지이미지</div>
          <div>예상거리: {challenge.distance}km</div>
          <div>성공여부: {challenge.success}</div>
        </div>
      ))}
    </section>
  )
}
