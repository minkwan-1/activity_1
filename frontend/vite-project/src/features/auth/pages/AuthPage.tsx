// AuthPage.tsx
import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import PageContainer from "../../../common/layout/common/PageContainer";
import axios from "axios";

// 스타일링된 버튼
const StartButton = styled(Button)({
  backgroundColor: "#03b901",
  color: "white",
  padding: "15px 40px",
  borderRadius: "30px",
  fontSize: "18px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#028a01", // Hover 시 배경색
  },
});

const AuthPage: React.FC = () => {
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
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              color: "#03b901",
              fontWeight: "bold",
            }}
          >
            새로운 도전을 시작하세요
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              color: "gray",
              fontWeight: "400",
            }}
          >
            당신의 도전을 Check_tivity와 공유하세요.
          </Typography>
          <StartButton onClick={handleLogin}>
            카카오 로그인으로 시작하기
          </StartButton>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default AuthPage;
