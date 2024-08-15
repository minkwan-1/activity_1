import React from "react";
import { useKakaoMap } from "../hooks/useKakaoMap";
import { seoulDistricts } from "../data/data";

const KakaoMap: React.FC = () => {
  const { mapContainerRef, panTo } = useKakaoMap(37.5759, 126.9769); // 초기값: 광화문

  return (
    <div>
      <div
        id="map"
        ref={mapContainerRef}
        style={{ width: "100%", height: "400px" }}
      ></div>
      <div>
        {seoulDistricts.map((district) => (
          <button
            key={district.name}
            onClick={() => panTo(district.lat, district.lng)}
          >
            {district.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KakaoMap;
