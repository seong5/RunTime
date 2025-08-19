import ChallengesCard from './_components/ChallengesCard'
import { challenges } from '@/mocks/challenges'

export default function Challenges() {
  return (
    <div className="flex flex-col gap-5 p-4">
      {challenges.map(challenge => (
        <ChallengesCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  )
}
