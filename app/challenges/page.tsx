'use client'

import ChallengesCard from './_components/ChallengesCard'
import SearchChallenges from './_components/SearchChallenges'
import { challenges } from '@/mocks/challenges'
import { useState } from 'react'

export default function Challenges() {
  const [q, setQ] = useState('')
  const [keyword, setKeyword] = useState('')
  const filtered = challenges.filter(ch =>
    keyword ? ch.name.toLowerCase().includes(keyword.toLocaleLowerCase()) : true
  )

  return (
    <>
      <SearchChallenges value={q} onChange={setQ} onSearch={v => setKeyword(v)} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
        {filtered.map(challenge => (
          <ChallengesCard key={challenge.id} challenge={challenge} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">검색 결과가 없습니다.</div>
        )}
      </div>
    </>
  )
}
