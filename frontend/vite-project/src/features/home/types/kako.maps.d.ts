// src/types/kakao.maps.d.ts
declare namespace kakao.maps {
  class Map {
    constructor(container: HTMLElement, options?: MapOptions);
    setCenter(center: LatLng): void;
    panTo(latlng: LatLng): void;
    setBounds(bounds: LatLngBounds): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }

  class LatLngBounds {
    constructor(swLatLng: LatLng, neLatLng: LatLng);
    extend(latlng: LatLng): void;
  }

  class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
  }

  class InfoWindow {
    constructor(options: InfoWindowOptions);
    setContent(content: string): void;
    open(map: Map, marker: Marker): void;
    close(): void;
  }

  class Places {
    constructor();
    keywordSearch(
      keyword: string,
      callback: (data: PlacesSearchResult[], status: Status) => void
    ): void;
  }

  interface MapOptions {
    center: LatLng;
    level?: number;
  }

  interface MarkerOptions {
    position: LatLng;
  }

  interface InfoWindowOptions {
    zIndex: number;
  }

  interface PlacesSearchResult {
    y: number; // Latitude
    x: number; // Longitude
    place_name: string;
  }

  enum Status {
    OK = "OK",
    ERROR = "ERROR",
    // Add other statuses if needed
  }
}

declare namespace kakao.maps.event {
  function addListener(
    target: any,
    event: string,
    callback: (...args: any[]) => void
  ): void;
  function removeListener(
    target: any,
    event: string,
    callback: (...args: any[]) => void
  ): void;
}
