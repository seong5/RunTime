export {}

declare global {
  namespace kakao.maps {
    class LatLng {
      constructor(lat: number, lng: number)
    }

    class Map {
      constructor(container: HTMLElement, options: { center: LatLng; level: number })
    }

    class Marker {
      constructor(options: { position: LatLng })
      setMap(map: Map | null): void
    }

    namespace services {
      const Status: {
        OK: string
      }

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
      }
    }
  }

  interface Window {
    kakao: typeof kakao
  }
}
