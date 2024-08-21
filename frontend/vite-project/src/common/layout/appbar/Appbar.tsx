import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Appbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 로그인 상태와 사용자 정보를 확인하기 위한 함수
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/user", {
        withCredentials: true,
      });
      setUser(response.data); // 사용자 정보를 상태로 저장
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null); // 사용자 정보가 없으면 null
    } finally {
      setLoading(false); // 로딩 완료
    }
  };

  // 컴포넌트가 마운트될 때 사용자 정보 가져오기
  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null); // 로그아웃 후 사용자 정보를 초기화
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        position: "sticky",
        bgcolor: "white",
        top: 0,
        zIndex: 999,
        fontWeight: "bold",
        borderBottom: "1px solid gray",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          height: "100%",
          display: "flex",
          margin: "0 auto",
          padding: "0px 20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left section with app name and navigation tabs */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
              color: "#05ce02",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Check_tivity
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginLeft: "50px",
            }}
          >
            <Button
              onClick={() => navigate("/escape-rooms")}
              sx={{
                fontWeight: "bold",
                color: "gray",
                border: "none",
                background: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent", // 호버 배경색을 투명하게 설정
                  color: "#05ce02", // 호버 시 글자 색상 변경
                },
              }}
            >
              방탈출
            </Button>
            <Button
              onClick={() => navigate("/board-games")}
              sx={{
                fontWeight: "bold",
                color: "gray",
                border: "none",
                background: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent", // 호버 배경색을 투명하게 설정
                  color: "#05ce02", // 호버 시 글자 색상 변경
                },
              }}
            >
              보드게임
            </Button>
            <Button
              onClick={() => navigate("/community")}
              sx={{
                fontWeight: "bold",
                color: "gray",
                border: "none",
                background: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent", // 호버 배경색을 투명하게 설정
                  color: "#05ce02", // 호버 시 글자 색상 변경
                },
              }}
            >
              커뮤니티
            </Button>
            <Button
              onClick={() => navigate("/partnership")}
              sx={{
                fontWeight: "bold",
                color: "gray",
                border: "none",
                background: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent", // 호버 배경색을 투명하게 설정
                  color: "#05ce02", // 호버 시 글자 색상 변경
                },
              }}
            >
              제휴
            </Button>
          </Box>
        </Box>

        {/* Right section with user info and auth buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : user ? (
            <>
              <Typography sx={{ marginRight: 2 }}>{user.name}</Typography>
              <Button
                onClick={handleLogout}
                sx={{
                  fontWeight: "bold",
                  color: "red",
                  border: "1px solid red",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  textTransform: "none",
                }}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              sx={{
                fontWeight: "bold",
                color: "gray",
                border: "1px solid gray",
                padding: "10px 20px",
                borderRadius: "12px",
                textTransform: "none",
              }}
            >
              로그인
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Appbar;
