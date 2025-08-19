import ChallengesCard from './_components/ChallengesCard'
import SearchChallenges from './_components/SearchChallenges'
import { challenges } from '@/mocks/challenges'

export default function Challenges() {
  return (
    <>
      <SearchChallenges />
      <div className="grid md:grid-cols-2 gap-5 p-4">
        {challenges.map(challenge => (
          <ChallengesCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </>
  )
}
