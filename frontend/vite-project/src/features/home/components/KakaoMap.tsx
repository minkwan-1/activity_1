import React, { useEffect, useRef } from "react";

const KakaoMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Kakao Maps API script should be loaded before this runs
      const mapOption = {
        center: new (window as any).kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
      new (window as any).kakao.maps.Map(mapContainerRef.current, mapOption);
    }
  }, []);

  return (
    <div>
      <div
        id="map"
        ref={mapContainerRef}
        style={{ width: "100%", height: "400px" }}
      ></div>
    </div>
  );
};

export default KakaoMap;
