import { useEffect, useRef } from "react";

export const useKakaoMap = (initialLat: number, initialLng: number) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (mapContainerRef.current) {
      const mapOption = {
        center: new (window as any).kakao.maps.LatLng(initialLat, initialLng),
        level: 3,
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

  const addMarker = (lat: number, lng: number) => {
    const markerPosition = new (window as any).kakao.maps.LatLng(lat, lng);
    const marker = new (window as any).kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(mapRef.current);
    markersRef.current.push(marker);
  };

  const clearMarkers = () => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  };

  return { mapContainerRef, panTo, addMarker, clearMarkers };
};
