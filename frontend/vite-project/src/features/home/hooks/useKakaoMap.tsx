import { useEffect, useRef } from "react";

export const useKakaoMap = (initialLat: number, initialLng: number) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      const mapOption = {
        center: new (window as any).kakao.maps.LatLng(initialLat, initialLng),
        level: 7,
      };

      mapRef.current = new (window as any).kakao.maps.Map(
        mapContainerRef.current,
        mapOption
      );
    }
  }, [initialLat, initialLng]);

  const panTo = (lat: number, lng: number) => {
    const moveLatLon = new (window as any).kakao.maps.LatLng(lat, lng);
    mapRef.current.panTo(moveLatLon);
  };

  return { mapContainerRef, panTo };
};
