import React, { useEffect, useState } from "react";
import { useKakaoMap } from "../hooks/useKakaoMap";
import { seoulDistricts } from "../data/data";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface KakaoMapProps {
  selectedTab: string;
  onDistrictClick: (districtName: string) => void;
}

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

const KakaoMap: React.FC<KakaoMapProps> = ({
  selectedTab,
  onDistrictClick,
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const { mapContainerRef, panTo, addMarker, clearMarkers } = useKakaoMap(
    37.5665,
    126.978,
    5
  );

  useEffect(() => {
    if (selectedDistrict) {
      const district = seoulDistricts.find((d) => d.name === selectedDistrict);
      if (district) {
        panTo(district.lat, district.lng);
        clearMarkers();
        addMarker(district.lat, district.lng, district.name);
      }
    }
  }, [selectedDistrict, panTo, addMarker, clearMarkers]);

  const handleButtonClick = (districtName: string) => {
    if (selectedTab === "방탈출" || selectedTab === "보드게임") {
      setSelectedDistrict(districtName);
      onDistrictClick(districtName);
    }
  };

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "500px", borderRadius: "15px" }}
      />
      {selectedTab === "방탈출" || selectedTab === "보드게임" ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px", // Add spacing between buttons
            justifyContent: "flex-start", // Align buttons to the start (left)
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {seoulDistricts.map((district) => (
            <StyledButton
              key={district.name}
              onClick={() => handleButtonClick(district.name)}
              isSelected={selectedDistrict === district.name}
            >
              {district.name}
            </StyledButton>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "10px" }}>준비중...</p>
      )}
    </div>
  );
};

export default KakaoMap;
