'use client'

type Props = {
  value: string
  onChange: (v: string) => void
  onSearch: (v: string) => void
}

export default function SearchChallenges({ value, onChange, onSearch }: Props) {
  return (
    <div className="flex flex-row items-center gap-4 m-4">
      <input
        type="search"
        placeholder="검색할 챌린지를 입력해주세요."
        className="rounded-full w-full border border-orange p-4"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="챌린지 검색"
        onKeyDown={e => {
          if (e.key === 'Enter') onSearch(value)
        }}
      />
      <button
        type="button"
        className="bg-green w-[120px] p-4 text-white text-[20px] font-semibold rounded-[16px]"
        onClick={() => onSearch(value)}
      >
        조회
      </button>
    </div>
  )
}
