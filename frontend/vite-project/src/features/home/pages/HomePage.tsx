import { useState } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ComponentWrapper from "../../../common/layout/common/ComponentWrapper";
import PageContainer from "../../../common/layout/common/PageContainer";
import KakaoMap from "../components/KakaoMap";
import TabMenu from "../components/TabMenu";

declare const kakao: any;

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("방탈출");
  const [keyword, setKeyword] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);

  const tabLabels = ["방탈출", "보드게임", "커뮤니티", "제휴"];

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
    if (selectedDistrict) {
      searchInDistrict(selectedDistrict, tabLabel);
    }
  };

  const handleSearch = () => {
    if (!keyword.trim()) {
      alert("키워드를 입력해주세요!");
      return;
    }
    if (selectedTab === "방탈출" || selectedTab === "보드게임") {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(keyword, placesSearchDB);
    }
  };

  const placesSearchDB = (data: any, status: any, pagination: any) => {
    if (status === kakao.maps.services.Status.OK) {
      setSearchResults(data);
      setPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const searchInDistrict = (districtName: string, tabLabel: string) => {
    if (tabLabel === "방탈출" || tabLabel === "보드게임") {
      const searchKeyword = `${districtName} ${tabLabel}`;
      setKeyword(searchKeyword);
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(searchKeyword, placesSearchDB);
    }
  };

  const handleDistrictClick = (districtName: string) => {
    setSelectedDistrict(districtName);
    searchInDistrict(districtName, selectedTab);
  };

  console.log(searchResults);

  return (
    <PageContainer>
      <ComponentWrapper>
        <TabMenu
          tabLabels={tabLabels}
          tabContent={tabContent}
          onTabChange={handleTabChange}
        />

        {/* Search Field */}
        {(selectedTab === "방탈출" || selectedTab === "보드게임") && (
          <TextField
            placeholder="점포명으로 찾기 (예: 엑스케이프 강남점)"
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
                    sx={{
                      bgcolor: "#05ce02",
                      color: "white",
                      borderRadius: "7px",
                    }}
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
        )}

        <KakaoMap
          selectedTab={selectedTab}
          onDistrictClick={handleDistrictClick}
        />

        {/* Render search results as cards */}
        {(selectedTab === "방탈출" || selectedTab === "보드게임") && (
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            {searchResults?.map((result, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    "&:hover": {
                      border: "1px solid #05ce02",
                      boxShadow: "none", // Remove the default box-shadow
                    },
                    border: "1px solid #ddd", // Default border
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {result.place_name}
                    </Typography>
                    {result.road_address_name && (
                      <Typography variant="body2" color="textSecondary">
                        {result.road_address_name}
                      </Typography>
                    )}
                    <Typography variant="body2" color="textSecondary">
                      {result.address_name}
                    </Typography>
                    {result.phone && (
                      <Typography variant="body2" color="textSecondary">
                        {result.phone}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Pagination Controls */}
        {(selectedTab === "방탈출" || selectedTab === "보드게임") &&
          pagination && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <div>
                {Array.from({ length: pagination.last }, (_, index) => (
                  <Button
                    key={index}
                    onClick={() => pagination.gotoPage(index + 1)}
                    variant={
                      pagination.current === index + 1
                        ? "contained"
                        : "outlined"
                    }
                    sx={{
                      margin: "0 5px",
                      bgcolor: "#05ce02",
                      color: "white",
                    }}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          )}
      </ComponentWrapper>
    </PageContainer>
  );
};

export default HomePage;
