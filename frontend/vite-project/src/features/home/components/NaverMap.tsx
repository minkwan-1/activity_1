import React, { useEffect, useRef } from "react";

// 전역에 naver 객체가 있다는 것을 TypeScript에게 알림
declare global {
  interface Window {
    naver: any; // naver의 타입이 정의되어 있다면 구체적인 타입으로 변경 가능
  }
}

const NaverMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.naver && mapRef.current) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5665, 126.978),
        zoom: 10,
      };

      new window.naver.maps.Map(mapRef.current, mapOptions);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default NaverMap;
