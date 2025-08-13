import { KAKAOMAP_API_KEY } from './config'

let _loaded: Promise<void> | null = null

type LoadOptions = {
  libraries?: string[]
  nonce?: string // Velcel의 CSP를 쓰는 경우
}

export function KakaoMapLoad(opts: LoadOptions = {}): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if ((window as any).kakao?.maps) return Promise.resolve()
  if (_loaded) return _loaded

  const { libraries = ['services'], nonce } = opts
  const query = new URLSearchParams({
    appkey: KAKAOMAP_API_KEY,
    autoload: 'false',
    libraries: libraries.join(','),
  })

  _loaded = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = `//dapi.kakao.com/v2/maps/sdk.js?${query.toString()}`
    s.async = true
    if (nonce) s.nonce = nonce

    s.onload = () => {
      try {
        ;(window as any).kakao.maps.load(() => resolve())
      } catch (e) {
        reject(e)
      }
    }
    s.onerror = () => reject(new Error('Kakao SDK 로드 실패'))

    // 중복 삽입 방지
    const exists = Array.from(document.scripts).some(sc => sc.src === s.src)
    if (!exists) document.head.appendChild(s)
    else {
      // 이미 로딩 중인 스크립트가 있으면 onload만 기다림
      // 이 경우 kakao.maps.load가 호출되지 않았을 수 있기 때문에 setTimeout으로 재시도
      const check = () => {
        if ((window as any).kakao?.maps) resolve()
        else setTimeout(check, 50)
      }
      check()
    }
  })

  return _loaded
}
