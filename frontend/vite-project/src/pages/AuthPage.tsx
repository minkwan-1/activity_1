import PageContainer from "../common/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const AuthPage = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          카카오 로그인 페이지 구현 요구사항
        </Typography>
        <Typography variant="body1">1. 카카오 로그인 버튼을 추가</Typography>
        <Typography variant="body1">
          2. 사용자가 카카오 로그인 버튼을 클릭하면 카카오 인증 API를 호출
        </Typography>
        <Typography variant="body1">
          3. 카카오 인증 API에서 반환된 인증 코드를 받아옴
        </Typography>
        <Typography variant="body1">
          4. 인증 코드로 서버에 액세스 토큰을 요청
        </Typography>
        <Typography variant="body1">
          5. 액세스 토큰을 이용해 사용자의 정보를 가져옴
        </Typography>
        <Typography variant="body1">
          6. 가져온 사용자 정보를 이용해 로그인 세션을 생성
        </Typography>
        <Typography variant="body1">
          7. 로그인 성공 시 메인 페이지로 리다이렉트
        </Typography>
        <Typography variant="body1">
          8. 로그인 실패 시 에러 메시지를 표시
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default AuthPage;
