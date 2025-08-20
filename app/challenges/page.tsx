'use client'

import { useState } from 'react'
import ChallengesCard from './_components/ChallengesCard'
import SearchChallenges from './_components/SearchChallenges'
import { challenges, type Challenges as ChallengeType } from '@/mocks/challenges'
import DropDown from '@/components/DropDown'
import Icon from '@/components/Icon'

type StatusFilter = 'All' | 'Clear' | 'NotYet'

export default function Challenges() {
  const [q, setQ] = useState('')
  const [keyword, setKeyword] = useState('')
  const [status, setStatus] = useState<StatusFilter>('All')

  const filtered = challenges.filter(ch => {
    const byKeyword = keyword ? ch.name.toLowerCase().includes(keyword.toLowerCase()) : true
    const byStatus = status === 'All' ? true : ch.status === status
    return byKeyword && byStatus
  })

  return (
    <main>
      <SearchChallenges value={q} onChange={setQ} onSearch={setKeyword} />
      <div className="mx-4 w-[90px] rounded-[16px]">
        <DropDown
          trigger={
            <div className="flex items-center justify-between rounded-[16px] border border-gray-300 px-3 py-2 bg-white">
              <p className="text-sm">
                {status === 'All' ? '전체' : status === 'Clear' ? '완료' : '미완료'}
              </p>
              <Icon icon="ChevronDown" />
            </div>
          }
          position="bottom"
          items={[
            { text: '전체', onClick: () => setStatus('All') },
            { text: '완료', onClick: () => setStatus('Clear') },
            { text: '미완료', onClick: () => setStatus('NotYet') },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
        {filtered.map(challenge => (
          <ChallengesCard key={challenge.id} challenge={challenge} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-10 text-center text-gray-500">검색 결과가 없습니다.</div>
        )}
      </div>
    </main>
  )
}
