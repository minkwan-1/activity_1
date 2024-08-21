import React, { useEffect, useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import PageContainer from "../../../common/layout/common/PageContainer";
import axios from "axios";

const AuthPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/auth/status", {
          withCredentials: true,
        });
        setIsLoggedIn(response.data.loggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/kakao");
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <PageContainer sx={{ background: "#f5f5f5" }}>
      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0f2f5", // Light background color
        }}
      >
        <Container
          maxWidth="sm"
          style={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            style={{
              marginBottom: "24px",
              color: "#4caf50",
              fontWeight: "600",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            새로운 도전을 시작하세요
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginBottom: "40px",
              color: "#616161",
              fontWeight: "400",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            당신의 도전을 Check_tivity가 응원합니다 🏃
          </Typography>
          {!isLoggedIn ? (
            <Button
              onClick={handleLogin}
              style={{
                background: "linear-gradient(45deg, #66bb6a 30%, #43a047 90%)",
                color: "white",
                padding: "12px 36px",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: "500",
                boxShadow: "0 3px 5px 2px rgba(67, 160, 71, .3)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #43a047 30%, #66bb6a 90%)";
                e.currentTarget.style.boxShadow =
                  "0 6px 10px 3px rgba(67, 160, 71, .4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #66bb6a 30%, #43a047 90%)";
                e.currentTarget.style.boxShadow =
                  "0 3px 5px 2px rgba(67, 160, 71, .3)";
              }}
            >
              카카오 로그인으로 시작하기
            </Button>
          ) : (
            <Typography
              variant="h6"
              style={{
                color: "#4caf50",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              이미 로그인되었습니다
            </Typography>
          )}
        </Container>
      </Box>
    </PageContainer>
  );
};

export default AuthPage;
