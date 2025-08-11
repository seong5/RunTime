// 기록페이지에서 쓰이는 mockdata
export type RunningRecord = {
  id: number
  date: string // YYYY-MM-DD
  distance: number // km
  time: string // HH:MM:SS
  pace: string // min/km
  calories: number // kcal
}

export const runningRecords: RunningRecord[] = [
  { id: 1, date: '2025-08-01', distance: 5.2, time: '00:28:14', pace: '5:25', calories: 320 },
  { id: 2, date: '2025-08-02', distance: 4.1, time: '00:22:11', pace: '5:24', calories: 250 },
  { id: 3, date: '2025-08-03', distance: 10.0, time: '00:55:10', pace: '5:31', calories: 620 },
  { id: 4, date: '2025-08-04', distance: 6.8, time: '00:36:45', pace: '5:24', calories: 410 },
  { id: 5, date: '2025-08-05', distance: 7.8, time: '00:43:22', pace: '5:33', calories: 470 },
  { id: 6, date: '2025-08-06', distance: 3.5, time: '00:18:45', pace: '5:21', calories: 220 },
  { id: 7, date: '2025-08-07', distance: 12.4, time: '01:07:15', pace: '5:25', calories: 770 },
  { id: 8, date: '2025-08-08', distance: 8.2, time: '00:45:30', pace: '5:32', calories: 500 },
  { id: 9, date: '2025-08-09', distance: 21.1, time: '01:56:12', pace: '5:31', calories: 1300 },
  { id: 10, date: '2025-08-10', distance: 5.0, time: '00:27:00', pace: '5:24', calories: 310 },
]
