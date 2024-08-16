import ComponentWrapper from "../../../common/layout/common/ComponentWrapper";
import PageContainer from "../../../common/layout/common/PageContainer";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ComponentWrapper>
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            padding: "80px 20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Typography gutterBottom sx={{ fontWeight: "600", fontSize: "30px" }}>
            서울의 방탈출/보드게임 카페를 한눈에 🔍
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ color: "#666666", maxWidth: "800px" }}
          >
            서울 지역의 방탈출과 보드게임 카페 정보를 제공하고, 제휴를 통해
            특별한 혜택을 제공하는 플랫폼입니다. 다양한 카페와 함께 새로운
            도전을 시작하세요.
          </Typography>
          <Button
            onClick={() => navigate("/home")}
            variant="contained"
            sx={{
              backgroundColor: "#05ce02",
              color: "white",
              "&:hover": {
                backgroundColor: "#03b001",
              },
              mt: 2, // margin-top
            }}
            size="large"
          >
            시작하기
          </Button>
        </Box>

        {/* Service Section */}
        <Box
          sx={{
            padding: "60px 20px",
            marginTop: "40px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "600", mb: 4 }}
          >
            우리는 다음과 같은 서비스를 제공해요 🚀
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card
                sx={{
                  height: "200px", // Increased height for better display
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "500" }}
                  >
                    방탈출 카페 정보
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    다양한 테마와 난이도의 방탈출 카페 정보를 통해 흥미로운
                    경험을 찾으세요.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card
                sx={{
                  height: "200px", // Increased height for better display
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "500" }}
                  >
                    보드게임 카페 정보
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    전략 게임부터 파티 게임까지 다양한 보드게임 카페 정보를 통해
                    즐거운 시간을 보세요.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card
                sx={{
                  height: "200px", // Increased height for better display
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "500" }}
                  >
                    제휴 혜택
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    제휴된 카페와 특별한 혜택을 통해 더 많은 즐거움을
                    경험하세요.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Card
                sx={{
                  height: "200px", // Increased height for better display
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "500" }}
                  >
                    커뮤니티
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    방탈출과 보드게임에 대한 정보를 공유하고, 커뮤니티 이벤트에
                    참여하여 함께 즐거운 시간을 보내세요.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: "#ffffff",
            color: "#333333",
            padding: "60px 20px",
            textAlign: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "40px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "600", mb: 2 }}
          >
            지금 가입하고 특별한 혜택을 누리세요 ❗️
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "#666666", maxWidth: "800px", margin: "0 auto" }}
          >
            플랫폼에 가입하여 서울 지역의 방탈출과 보드게임 카페에 대한 정보를
            얻고, 제휴 혜택을 통해 더 많은 즐거움을 경험하세요.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#05ce02",
              color: "white",
              "&:hover": {
                backgroundColor: "#03b001",
              },
              mt: 2,
            }}
            size="large"
          >
            지금 가입하기
          </Button>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default LandingPage;
