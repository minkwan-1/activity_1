import React, { useEffect, useState } from "react";
import { useKakaoMap } from "../hooks/useKakaoMap";
import { seoulDistricts } from "../data/data";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// MUI 스타일링을 위한 Button 컴포넌트 커스터마이즈
const StyledButton = styled(Button)<{ isSelected?: boolean }>(
  ({ isSelected }) => ({
    border: isSelected ? "2px solid #04b301" : "1px solid #04b301",
    color: isSelected ? "#04b301" : "gray",
    backgroundColor: isSelected ? "#e0f2e9" : "transparent",
    "&:hover": {
      border: isSelected ? "2px solid #04b301" : "1px solid #04b301",
      backgroundColor: isSelected ? "#d1f0d0" : "#f0f0f0",
    },
    borderRadius: "10px",
    padding: "5px 10px",
    fontSize: "16px",
    margin: "2px",
  })
);

const KakaoMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  // 초기값: 서울특별시청
  const { mapContainerRef, panTo, addMarker, clearMarkers } = useKakaoMap(
    37.5665,
    126.978
  );

  useEffect(() => {
    // 서울 25개 자치구 중심에 마커 추가
    seoulDistricts.forEach((district) => {
      addMarker(district.lat, district.lng);
    });
  }, [addMarker]);

  const handleButtonClick = (
    districtName: string,
    lat: number,
    lng: number
  ) => {
    // 선택된 자치구 name으로 selectedDistrict(state) update
    setSelectedDistrict(districtName);
    // 선택된 자치구의 위도, 경도를 통해 panTo 실행
    panTo(lat, lng);
    // clearMarkers 함수 실행
    clearMarkers();
    // addMarker 함수 실행
    addMarker(lat, lng);
  };

  return (
    <div>
      <div
        id="map"
        ref={mapContainerRef}
        style={{ width: "100%", height: "400px" }}
      ></div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          marginTop: "10px",
        }}
      >
        {seoulDistricts.map((district) => (
          <StyledButton
            key={district.name}
            isSelected={selectedDistrict === district.name}
            onClick={() =>
              handleButtonClick(district.name, district.lat, district.lng)
            }
          >
            {district.name}
          </StyledButton>
        ))}
      </div>
    </div>
  );
};

export default KakaoMap;
