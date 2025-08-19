'use client'

import ChallengesCard from './_components/ChallengesCard'
import SearchChallenges from './_components/SearchChallenges'
import { challenges } from '@/mocks/challenges'
import { useState } from 'react'
import DropDown from '@/components/DropDown'
import Icon from '@/components/Icon'

export default function Challenges() {
  const [q, setQ] = useState('')
  const [keyword, setKeyword] = useState('')
  const filtered = challenges.filter(ch =>
    keyword ? ch.name.toLowerCase().includes(keyword.toLocaleLowerCase()) : true
  )

  return (
    <main>
      <SearchChallenges value={q} onChange={setQ} onSearch={v => setKeyword(v)} />
      <div className="mx-4 border border-gray-300 w-[100px] rounded-[16px] p-2">
        <DropDown
          trigger={
            <div className="flex flex-row gap-2">
              <Icon icon="ChevronDown" />
              <p>필터</p>
            </div>
          }
          position="bottom"
          items={[
            { text: '완료', onClick: () => console.log('필터all') },
            { text: '미완료', onClick: () => console.log('필터notyet') },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
        {filtered.map(challenge => (
          <ChallengesCard key={challenge.id} challenge={challenge} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">검색 결과가 없습니다.</div>
        )}
      </div>
    </main>
  )
}
