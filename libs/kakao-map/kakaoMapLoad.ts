import { KAKAOMAP_API_KEY } from './config'

let _loaded: Promise<void> | null = null

export function KakaoMapLoad(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if ((window as any).kakao?.maps) return Promise.resolve()

  if (_loaded) return _loaded

  _loaded = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_API_KEY}&libraries=services`
    s.async = true
    s.onload = () => {
      ;(window as any).kakao.maps.load(() => resolve())
    }
    s.onerror = reject
    document.head.appendChild(s)
  })

  return _loaded
}
