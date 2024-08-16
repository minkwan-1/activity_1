// src/pages/HomePage.tsx
import { useState } from "react";
import ComponentWrapper from "../../../common/layout/common/ComponentWrapper";
import PageContainer from "../../../common/layout/common/PageContainer";
import {
  KakaoMap,
  PaginationControls,
  SearchField,
  SearchResults,
  TabContents,
  TabMenu,
} from "../components/index";
import { tabLabels } from "../data/data";

declare const kakao: any;

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState("방탈출");
  const [keyword, setKeyword] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(null);

  const tabContent = [
    <TabContents key="0" selectedTab="방탈출" />,
    <TabContents key="1" selectedTab="보드게임" />,
    <TabContents key="2" selectedTab="커뮤니티" />,
    <TabContents key="3" selectedTab="제휴" />,
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

  return (
    <PageContainer>
      <ComponentWrapper>
        <TabMenu
          tabLabels={tabLabels}
          tabContent={tabContent} // Ensure this is an array
          onTabChange={handleTabChange}
        />

        {(selectedTab === "방탈출" || selectedTab === "보드게임") && (
          <SearchField
            keyword={keyword}
            onKeywordChange={(e) => setKeyword(e.target.value)}
            onSearch={handleSearch}
          />
        )}

        <KakaoMap
          selectedTab={selectedTab}
          onDistrictClick={handleDistrictClick}
        />

        {(selectedTab === "방탈출" || selectedTab === "보드게임") && (
          <>
            <SearchResults searchResults={searchResults} />
            {pagination && <PaginationControls pagination={pagination} />}
          </>
        )}
      </ComponentWrapper>
    </PageContainer>
  );
};

export default HomePage;
