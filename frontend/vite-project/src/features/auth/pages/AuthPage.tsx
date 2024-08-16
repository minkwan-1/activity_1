// AuthPage.tsx
import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import PageContainer from "../../../common/layout/common/PageContainer";
import axios from "axios";
import { kakaoImg } from "../../../common/images";

// 스타일링된 버튼들
const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: "none",
}));

const GoogleButton = styled(CustomButton)({
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  color: "#000",
  padding: "15px 0",
  width: "100%",
  minHeight: "48px",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const KakaoButton = styled(CustomButton)({
  backgroundColor: "#ffe502", // 기본 배경색
  color: "transparent", // 텍스트 색상 투명
  backgroundImage: `url(${kakaoImg})`, // 카카오 이미지 URL
  backgroundSize: "cover", // 이미지 크기 조정
  backgroundPosition: "center", // 이미지 위치 조정
  backgroundRepeat: "no-repeat", // 이미지 반복 방지
  textAlign: "center", // 텍스트 중앙 정렬
  padding: "15px 0", // 버튼 안쪽 여백
  width: "100%", // 버튼 너비 100%
  minHeight: "48px", // 버튼 최소 높이
  fontSize: "16px", // 텍스트 크기
  fontWeight: "bold", // 텍스트 두께
  textIndent: "-9999px", // 텍스트 숨기기
  "&:hover": {
    backgroundColor: "#ffe502", // Hover 시 배경색
    backgroundImage: `url(${kakaoImg})`, // Hover 시 이미지
  },
});

const slides = [
  {
    title: "Welcome to Check_tivity!",
    content: "Check_tivity에 오신 것을 환영합니다! 첫 번째 페이지 설명입니다.",
  },
  {
    title: "Explore Features",
    content: "다양한 기능을 사용해 보세요. 두 번째 페이지 설명입니다.",
  },
  {
    title: "Get Started",
    content: "지금 바로 시작해 보세요! 세 번째 페이지 설명입니다.",
  },
];

// 로그인 페이지 컴포넌트
const AuthPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // 자동 슬라이드 변경
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3초마다 슬라이드 변경
    return () => clearInterval(interval);
  }, []);

  // 이전 슬라이드로 이동
  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // 다음 슬라이드로 이동
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // 카카오 로그인 처리 로직
  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/kakao");
      window.location.href = response.data.redirectUrl; // 카카오 인증 페이지로 리다이렉트
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <PageContainer>
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container>
            {/* 좌측 절반: 슬라이더와 설명 */}
            {!isSmallScreen && (
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Typography
                  component="div"
                  gutterBottom
                  sx={{
                    mb: 2,
                    color: "#03b901",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                >
                  Check_tivity
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 600,
                    mb: 4, // 슬라이드 내용과 버튼 사이의 간격
                  }}
                >
                  <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                    {slides[currentSlide].title}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {slides[currentSlide].content}
                  </Typography>
                </Box>

                {/* 페이지 네이션 버튼들 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      mx: 1, // 버튼 사이의 간격
                    }}
                  >
                    <ArrowBack />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      mx: 1, // 버튼 사이의 간격
                    }}
                  >
                    <ArrowForward />
                  </IconButton>
                </Box>
              </Grid>
            )}

            {/* 우측 절반: 로그인 버튼들 */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    marginBottom: "25px",
                  }}
                >
                  소셜 계정으로 시작하기
                </Typography>

                <KakaoButton onClick={handleLogin}>카카오 로그인</KakaoButton>
                <GoogleButton variant="outlined" startIcon={<Google />}>
                  Google로 로그인
                </GoogleButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
};

export default AuthPage;
