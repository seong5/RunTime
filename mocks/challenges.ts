// 챌린지 페이지에서 사용될 mockData
export type Challenges = {
  id: number
  imageUrl: string
  name: string
  distance: number
  status: string
}

export const challenges: Challenges[] = [
  { id: 1, name: '종로 댕댕이런', distance: 8, status: 'Clear', imageUrl: '/images/댕댕이런.jpg' },
  { id: 2, name: '광교 고래런', distance: 12, status: 'NotYet', imageUrl: '/images/고래런.jpg' },
  { id: 3, name: '하트런', distance: 8.7, status: 'Clear', imageUrl: '/images/하트런.jpg' },
  { id: 4, name: '옷걸이런', distance: 30, status: 'NotYet', imageUrl: '/images/옷걸이런.jpg' },
  {
    id: 5,
    name: '여의도 고구마런',
    distance: 6,
    status: 'Clear',
    imageUrl: '/images/고구마런.jpg',
  },
  { id: 6, name: '붕어빵런', distance: 10, status: 'Clear', imageUrl: '/images/붕어빵런.jpg' },
]
