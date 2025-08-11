'use client'
import { useState } from 'react'

export type PeriodType = '주' | '월' | '년' | '전체'

type Props =
  | { value: PeriodType; onChange: (v: PeriodType) => void; defaultValue?: never }
  | { value?: never; onChange: (v: PeriodType) => void; defaultValue?: PeriodType }

export default function PeriodFilter(props: Props) {
  const isControlled = 'value' in props
  const selected = isControlled ? props.value : undefined
  const [internal, setInternal] = useState<PeriodType>(props.defaultValue ?? '주')

  const current = selected ?? internal
  const options: PeriodType[] = ['주', '월', '년', '전체']

  const handle = (v: PeriodType) => {
    if (!isControlled) setInternal(v)
    props.onChange(v)
  }

  return (
    <div className="flex gap-5 mt-10 justify-center items-center">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => handle(opt)}
          className={`text-center w-[70px] h-[50px] font-semibold text-[15px] md:text-[25px] md:w-[100px] px-3 rounded-[16px] border border-gray-300 ${
            current === opt ? 'bg-orange text-white' : 'bg-white text-gray-200'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
