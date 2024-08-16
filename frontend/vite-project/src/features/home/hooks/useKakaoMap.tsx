import { useRef, useEffect, useCallback } from "react";

declare const kakao: any;

export const useKakaoMap = (
  initialLat: number,
  initialLng: number,
  initialZoom: number
) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new kakao.maps.Map(mapContainerRef.current, {
        center: new kakao.maps.LatLng(initialLat, initialLng),
        level: initialZoom,
      });
      mapRef.current = map;
    }
  }, [initialLat, initialLng, initialZoom]);

  const panTo = useCallback((lat: number, lng: number) => {
    const moveLatLon = new kakao.maps.LatLng(lat, lng);
    mapRef.current.panTo(moveLatLon);
  }, []);

  const addMarker = useCallback((lat: number, lng: number, title: string) => {
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      title: title,
    });
    marker.setMap(mapRef.current);
    markersRef.current.push(marker);
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];
  }, []);

  return { mapContainerRef, panTo, addMarker, clearMarkers };
};
