import { useState } from "react";
import { Typography, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ComponentWrapper from "../../../common/layout/common/ComponentWrapper";
import PageContainer from "../../../common/layout/common/PageContainer";
import KakaoMap from "../components/KakaoMap";
import TabMenu from "../components/TabMenu";
import EscapeRoomPage from "./EscapeRoomPage";
import BoardGamePage from "./BoardGamePage";
import CommunityPage from "./CommunityPage";
import PartnershipPage from "./PartnershipPage";

// Assuming kakao.maps.services.Status and ps (placesService) are globally available
declare const kakao: any;

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("방탈출");
  const [keyword, setKeyword] = useState("");
  const tabLabels = ["방탈출", "보드게임", "커뮤니티", "제휴"];
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const tabContent = [
    <Typography key="0">
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        방탈출 (Escape Rooms)
      </Typography>
      서울 지역에 위치한 방탈출 카페에서 새로운 도전을 경험해 보세요! 다양한
      테마와 난이도의 방탈출 게임을 통해 친구, 가족, 동료와 함께 팀워크를
      발휘하며 미스터리를 해결해보세요.
    </Typography>,
    <Typography key="1">
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        보드게임 (Board Games)
      </Typography>
      서울 지역에 위치한 보드게임 카페입니다. 전략, 협력, 파티 게임 등 다양한
      종류의 게임을 제공하여 즐거운 시간을 보낼 수 있습니다.
    </Typography>,
    <Typography key="2">
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        커뮤니티 (Community)
      </Typography>
      방탈출과 보드게임을 좋아하는 사람들과 소통할 수 있는 커뮤니티입니다.
      이벤트, 모임, 정보 공유 등 다양한 활동을 통해 친구를 만들고 소통해보세요.
    </Typography>,
    <Typography key="3">
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        제휴 (Partnerships)
      </Typography>
      제휴된 장소와 할인 정보를 확인하고 특별한 혜택을 누려보세요. 다양한 제휴
      파트너와 함께 특별한 경험을 제공받을 수 있습니다.
    </Typography>,
  ];

  const handleTabChange = (tabLabel: string) => {
    setSelectedTab(tabLabel);
  };

  const handleSearch = () => {
    if (!keyword.trim()) {
      alert("키워드를 입력해주세요!");
      return;
    }
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchDB);
  };

  const placesSearchDB = (data: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setSearchResults(data);
      console.log(data);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };
  console.log(selectedTab);
  return (
    <PageContainer>
      <ComponentWrapper>
        <TabMenu
          tabLabels={tabLabels}
          tabContent={tabContent}
          onTabChange={handleTabChange}
        />

        {/* Search Field */}
        <TextField
          placeholder="지역으로 방탈출/보드게임 카페 찾기"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={handleSearch}
                  variant="contained"
                  color="primary"
                >
                  검색
                </Button>
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{
            marginBottom: "20px",
            bgcolor: "#f5f5f5",
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                borderColor: "#ced4da",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#ced4da",
              },
            },
            "& .MuiInputBase-input": {
              padding: "15px",
            },
          }}
        />

        {/* KakaoMap Component rendering */}
        <KakaoMap selectedTab={selectedTab} />

        {/* Render search results */}
        {searchResults?.map((result, index) => (
          <p key={index}>{result?.place_name}</p>
        ))}

        {/* Conditionally render the EscapeRoomPage component */}
        {selectedTab === "방탈출" && <EscapeRoomPage />}
        {selectedTab === "보드게임" && <BoardGamePage />}
        {selectedTab === "커뮤니티" && <CommunityPage />}
        {selectedTab === "제휴" && <PartnershipPage />}
      </ComponentWrapper>
    </PageContainer>
  );
};

export default HomePage;
