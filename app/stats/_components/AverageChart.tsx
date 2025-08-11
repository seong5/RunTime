'use client'

import { useMemo } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import type { PeriodType } from './PeriodFilter'
import { runningRecords } from '@/mocks/runningRecord'
import { toLocalDate, hmsToSec, fmtPace, getRange } from '@/utils/dateUtils'

type ChartPoint = {
  date: string
  distance: number
  paceSecPerKm: number
}

export default function AverageChart({ period }: { period: PeriodType }) {
  // 기간 필터링 + 차트용 데이터 변환
  const data = useMemo<ChartPoint[]>(() => {
    const { start, end } = getRange(period, new Date())
    const filtered =
      !start || !end
        ? runningRecords
        : runningRecords.filter(r => {
            const d = toLocalDate(r.date)
            return d >= start && d <= end
          })

    // 날짜 오름차순 정렬
    const sorted = [...filtered].sort((a, b) => (a.date < b.date ? -1 : 1))

    return sorted.map(r => {
      const totalSec = hmsToSec(r.time)
      const pace = r.distance > 0 ? totalSec / r.distance : Number.POSITIVE_INFINITY
      return {
        date: r.date,
        distance: Number(r.distance.toFixed(2)),
        paceSecPerKm: pace,
      }
    })
  }, [period])

  if (data.length === 0) {
    return (
      <div className="rounded-xl border p-6 text-center text-sm text-gray-500">
        해당 기간에 표시할 데이터가 없습니다.
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="mb-3 text-[16px] text-gray-500">평균 그래프</div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 13 }} minTickGap={16} />
            {/* 왼쪽 Y축: 거리(km) */}
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 12 }}
              width={50}
              label={{ value: '', angle: -90, position: 'insideLeft', offset: 6 }}
            />
            {/* 오른쪽 Y축: 페이스(M:SS/km) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 12 }}
              width={50}
              tickFormatter={v => fmtPace(v).replace('/km', '')}
              label={{ value: '', angle: 90, position: 'insideRight', offset: 10 }}
              domain={['auto', 'auto']}
            />
            <Tooltip
              formatter={(value: any, name: string) => {
                if (name === 'distance') return [`${value} km`, '거리']
                if (name === 'paceSecPerKm') return [fmtPace(value as number), '평균 페이스']
                return [value, name]
              }}
              labelFormatter={label => `날짜: ${label}`}
            />
            <Bar
              yAxisId="left"
              dataKey="distance"
              name="distance"
              barSize={24}
              radius={[6, 6, 0, 0]}
              fill="#3f6212"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
