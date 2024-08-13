import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  onMapReady?: (mapInstance: any) => void;
}

const NaverMap: React.FC<NaverMapProps> = ({ onMapReady }) => {
  // a) 지도를 렌더링할 DOM 요소를 참조
  const mapRef = useRef<HTMLDivElement | null>(null);

  // b) 사용자의 현재 위치를 저장, 초기값은 서울 시청
  const [userLocation, setUserLocation] = useState<[number, number]>([
    37.5665, 126.978,
  ]);

  // c) 지도 상태를 저장: 로딩 중, 지원되지 않음, 또는 준비 완료.
  const [mapStatus, setMapStatus] = useState<
    "loading" | "unsupported" | "ready"
  >("loading");

  // d) 위치 권한 상태를 저장: 허용됨, 거부됨, 또는 권한 요청 필요.
  const [locationPermission, setLocationPermission] = useState<
    "granted" | "denied" | "prompt"
  >("prompt");

  // e) Naver Map 인스턴스를 저장
  const [map, setMap] = useState<any>(null);

  // f) 스낵바에 표시할 메시지를 저장, 메시지가 없으면 null
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  // g) 위치 권한 요청 다이얼로그의 표시 여부를 저장
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);

  // 1. userLoacation을 기반으로 Map을 초기화
  useEffect(() => {
    initializeMap(userLocation);
    checkLocationPermission();
  }, []);

  // 2. Naver Map을 초기화하고, 지도가 준비되면 콜백을 호출
  const initializeMap = (location: [number, number]) => {
    if (window.naver && mapRef.current) {
      try {
        const mapOptions = {
          center: new window.naver.maps.LatLng(location[0], location[1]),
          zoom: 14,
        };
        const newMap = new window.naver.maps.Map(mapRef.current, mapOptions);
        setMap(newMap);
        window.naver.maps.Event.once(newMap, "init_stylemap", () => {
          setMapStatus("ready");
          if (onMapReady) {
            onMapReady(newMap);
          }
        });
      } catch (error) {
        console.error("Error initializing Naver Map:", error);
        setMapStatus("unsupported");
      }
    } else {
      setMapStatus("unsupported");
    }
  };

  // 3. 위치 권한 상태를 확인하고 업데이트를 진행
  const checkLocationPermission = async () => {
    if ("permissions" in navigator) {
      const permission = await navigator.permissions.query({
        name: "geolocation",
      });
      setLocationPermission(permission.state);

      permission.onchange = () => {
        setLocationPermission(permission.state);
      };
    }
  };

  // 4. 위치 권한 요청 다이얼로그를 표시
  const requestLocationPermission = () => {
    if (locationPermission === "denied") {
      setSnackbarMessage(
        "위치 권한이 거부되었습니다. 브라우저 설정에서 권한을 변경해주세요."
      );
      return;
    }

    setShowPermissionDialog(true);
  };

  // 5. 위치 권한을 요청하고 사용자의 현재 위치를 가져옴
  const handlePermissionRequest = () => {
    setShowPermissionDialog(false);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setUserLocation(newLocation);
          if (map) {
            map.setCenter(
              new window.naver.maps.LatLng(newLocation[0], newLocation[1])
            );
            new window.naver.maps.Marker({
              position: new window.naver.maps.LatLng(
                newLocation[0],
                newLocation[1]
              ),
              map: map,
            });
          }
          setSnackbarMessage(
            "위치 권한이 허용되었습니다. 현재 위치를 표시합니다."
          );
          setLocationPermission("granted");
        },
        (error) => {
          console.error("Error getting user location:", error);
          setSnackbarMessage(
            "위치 정보를 가져올 수 없습니다. 권한을 확인해주세요."
          );
          setLocationPermission("denied");
        }
      );
    } else {
      setSnackbarMessage("이 브라우저는 위치 정보를 지원하지 않습니다.");
    }
  };

  // 6. 지도의 상태에 따라 적절한 콘텐츠를 렌더링
  const renderContent = () => {
    switch (mapStatus) {
      case "loading":
        return (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress size={32} color="primary" />
            <Typography variant="body1" color="text.secondary" ml={2}>
              지도를 불러오는 중...
            </Typography>
          </Box>
        );
      case "unsupported":
        return (
          <Typography variant="body1" color="error">
            지도가 지원되지 않는 브라우저입니다.
          </Typography>
        );
      case "ready":
        return null;
      default:
        return null;
    }
  };
  console.log(mapStatus);
  return (
    <Box
      position="relative"
      sx={{
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        ref={mapRef}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        {renderContent()}
      </Box>
      {mapStatus === "ready" && (
        <Button
          variant="contained"
          color={locationPermission === "granted" ? "secondary" : "primary"}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1000,
          }}
          onClick={requestLocationPermission}
        >
          {locationPermission === "granted" ? "위치 사용 중" : "위치 권한 요청"}
        </Button>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={!!snackbarMessage}
        autoHideDuration={5000}
        onClose={() => setSnackbarMessage(null)}
        message={snackbarMessage}
      />
      <Dialog
        open={showPermissionDialog}
        onClose={() => setShowPermissionDialog(false)}
      >
        <DialogTitle>위치 권한 요청</DialogTitle>
        <DialogContent>
          <Typography>
            현재 위치를 지도에 표시하기 위해 위치 권한이 필요합니다. 위치 권한을
            허용하시겠습니까?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPermissionDialog(false)}>취소</Button>
          <Button onClick={handlePermissionRequest} autoFocus>
            허용
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NaverMap;
