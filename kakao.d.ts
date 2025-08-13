export {}

declare global {
  namespace kakao {
    namespace maps {
      function load(callback: () => void): void

      class LatLng {
        constructor(lat: number, lng: number)
        getLat(): number
        getLng(): number
      }

      type MapOptions = {
        center: LatLng
        level?: number
      }

      class Map {
        constructor(container: HTMLElement, options: MapOptions)
        setCenter(latlng: LatLng): void
        setLevel(level: number): void
        setBounds(
          bounds: LatLngBounds,
          paddingTop?: number,
          paddingRight?: number,
          paddingBottom?: number,
          paddingLeft?: number
        ): void
      }

      type MarkerOptions = {
        position: LatLng
        title?: string
      }

      class Marker {
        constructor(options: MarkerOptions)
        setMap(map: Map | null): void
      }

      type PolylineOptions = {
        path: LatLng[]
        strokeWeight?: number
        strokeColor?: string
        strokeOpacity?: number
        strokeStyle?:
          | 'solid'
          | 'shortdash'
          | 'shortdot'
          | 'shortdashdot'
          | 'shortdashdotdot'
          | 'dash'
          | 'dot'
          | 'dashdot'
          | 'longdash'
          | 'longdot'
          | 'longdashdot'
          | 'longdashdotdot'
      }

      class Polyline {
        constructor(options: PolylineOptions)
        setMap(map: Map | null): void
        setPath(path: LatLng[]): void
        getPath(): LatLng[]
        getLength(): number
      }

      class LatLngBounds {
        constructor(sw?: LatLng, ne?: LatLng)
        extend(latlng: LatLng): void
      }

      namespace services {
        const Status: { OK: string }

        type Coord2AddressResult = {
          address?: { address_name: string }
          road_address?: { address_name: string }
        }

        class Geocoder {
          coord2Address(
            lng: number,
            lat: number,
            callback: (result: Coord2AddressResult[], status: string) => void
          ): void

          // 필요시 주소를 좌표로
          addressSearch(query: string, callback: (result: any[], status: string) => void): void
        }
      }
    }
  }

  interface Window {
    kakao: typeof kakao
  }
}
