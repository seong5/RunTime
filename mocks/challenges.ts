// 챌린지 페이지에서 사용될 mockData
export type Challenges = {
  id: number
  name: string
  distance: number
  success: string
}

export const challenges: Challenges[] = [
  { id: 1, name: '종로 댕댕이런', distance: 8, success: 'Clear' },
  { id: 2, name: '고래런', distance: 12, success: 'Clear' },
  { id: 3, name: '런닝맨', distance: 8.7, success: 'Clear' },
  { id: 4, name: '해골런', distance: 15.6, success: 'Clear' },
  { id: 5, name: '고구마런', distance: 6, success: 'Clear' },
]
