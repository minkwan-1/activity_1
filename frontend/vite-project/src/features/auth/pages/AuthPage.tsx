import React, { useState, useEffect } from "react";
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

// 스타일링된 버튼들
const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: "none",
}));

const GoogleButton = styled(CustomButton)({
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  color: "#000",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const KakaoButton = styled(CustomButton)({
  backgroundColor: "#ffe502",
  color: "black",
  "&:hover": {
    backgroundColor: "#ffe502",
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
const LoginPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // 자동 슬라이드 변경
  useEffect(() => {
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

                <KakaoButton variant="contained" sx={{ padding: "15px 0" }}>
                  카카오로 로그인
                </KakaoButton>
                <GoogleButton
                  variant="outlined"
                  startIcon={<Google />}
                  sx={{ padding: "15px 0" }}
                >
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

export default LoginPage;
