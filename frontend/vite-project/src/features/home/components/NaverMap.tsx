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

const NaverMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number]>([
    37.5665, 126.978,
  ]); // 기본 위치: 서울
  const [mapStatus, setMapStatus] = useState<
    "loading" | "unsupported" | "ready"
  >("loading");
  const [locationPermission, setLocationPermission] = useState<
    "granted" | "denied" | "prompt"
  >("prompt");
  const [map, setMap] = useState<any>(null);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);

  useEffect(() => {
    initializeMap(userLocation);
    checkLocationPermission();
  }, []);

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
        });
      } catch (error) {
        console.error("Error initializing Naver Map:", error);
        setMapStatus("unsupported");
      }
    } else {
      setMapStatus("unsupported");
    }
  };

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

  const requestLocationPermission = () => {
    if (locationPermission === "denied") {
      setSnackbarMessage(
        "위치 권한이 거부되었습니다. 브라우저 설정에서 권한을 변경해주세요."
      );
      return;
    }

    setShowPermissionDialog(true);
  };

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
