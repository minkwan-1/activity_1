import PageContainer from "../common/layout/common/PageContainer";
import ComponentWrapper from "../common/layout/common/ComponentWrapper";
import { Box, Typography } from "@mui/material";

const EscapePage = () => {
  return (
    <PageContainer>
      <ComponentWrapper>
        <Box sx={{ border: "1px solid black", minHeight: "100px" }}>
          <Typography>페이지 설명 글</Typography>
        </Box>
        <Box sx={{ border: "1px solid black", minHeight: "100px" }}>
          <Typography>지역 검색 필드</Typography>
        </Box>
        <Box sx={{ border: "1px solid black", minHeight: "400px" }}>
          <Typography>카카오 지도 렌더링</Typography>
        </Box>
        <Box sx={{ border: "1px solid black", minHeight: "100px" }}>
          <Typography>서울 자치구 버튼 필드</Typography>
        </Box>
        <Box sx={{ border: "1px solid black", minHeight: "800px" }}>
          <Typography>업체 정보 카드 렌더링 영역</Typography>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default EscapePage;
