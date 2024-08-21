import PageContainer from "../common/layout/common/PageContainer";
import ComponentWrapper from "../common/layout/common/ComponentWrapper";
import { Box, Typography } from "@mui/material";

const BoardgampePage = () => {
  return (
    <PageContainer>
      <ComponentWrapper>
        <Box
          sx={{
            border: "1px solid black",
            minHeight: "150px",
            padding: "10px",
          }}
        >
          <Typography variant="h6">페이지 설명 글 영역</Typography>
          <Typography variant="body2" color="textSecondary">
            - 페이지의 목적과 사용 방법을 설명하는 텍스트를 표시
            <br />
            - 간단하고 명확한 설명을 제공하여 사용자에게 페이지의 기능과 사용
            방법을 안내
            <br />- 스타일링을 통해 가독성 제고
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            minHeight: "150px",
            padding: "10px",
          }}
        >
          <Typography variant="h6">지역 검색 필드 영역</Typography>
          <Typography variant="body2" color="textSecondary">
            - 사용자가 특정 지역을 입력하여 검색할 수 있는 입력 필드를 구현
            <br />- 사용자가 검색을 실행하면 관련된 보드게임 업체 정보를 필터링
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            minHeight: "450px",
            padding: "10px",
          }}
        >
          <Typography variant="h6">카카오 지도 렌더링 영역</Typography>
          <Typography variant="body2" color="textSecondary">
            - 카카오 지도 API를 이용하여 해당 영역에 지도를 렌더링
            <br />- 지도는 사용자가 선택한 지역을 중심으로 표시되며, 보드게임
            업체 위치가 마커로 나타남
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            minHeight: "150px",
            padding: "10px",
          }}
        >
          <Typography variant="h6">서울 자치구 버튼 필드</Typography>
          <Typography variant="body2" color="textSecondary">
            - 서울의 각 자치구를 나타내는 버튼들을 나열
            <br />
            - 사용자가 특정 자치구 버튼을 클릭하면, 해당 자치구에 위치한
            보드게임 업체들만 지도를 통해 표시
            <br />- 클릭된 버튼의 스타일을 변경하여 사용자가 선택한 자치구를
            명확하게 표시
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid black",
            minHeight: "850px",
            padding: "10px",
          }}
        >
          <Typography variant="h6">
            방탈출 업체 정보 카드 렌더링 영역
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - 검색된 지역 또는 선택된 자치구의 보드게임 업체 정보를 카드
            형식으로 나열
            <br />
            - 각 카드에는 업체명, 주소, 연락처 등의 정보가 포함
            <br />
            - 카드를 클릭하면 업체의 상세 페이지로 이동
            <br />- 많은 업체 정보를 효율적으로 표시하기 위해 페이지네이션 구현
          </Typography>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default BoardgampePage;
