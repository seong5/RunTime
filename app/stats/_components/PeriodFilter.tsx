'use client'
import { useState } from 'react'

type PeriodType = '주' | '월' | '년' | '전체'

interface Props {
  defaultValue?: PeriodType
  onChange: (value: PeriodType) => void
}

export default function PeriodFilter({ defaultValue = '주', onChange }: Props) {
  const [selected, setSelected] = useState<PeriodType>(defaultValue)
  const options: { label: string; value: PeriodType }[] = [
    { label: '주', value: '주' },
    { label: '월', value: '월' },
    { label: '년', value: '년' },
    { label: '전체', value: '전체' },
  ]

  const handleClick = (value: PeriodType) => {
    setSelected(value)
    onChange?.(value)
  }

  return (
    <div className="flex gap-5 mt-10">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => handleClick(opt.value)}
          className={`px-4 py-2 rounded-[16px] border ${
            selected === opt.value ? 'bg-orange text-white' : 'bg-white text-gray-950'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
