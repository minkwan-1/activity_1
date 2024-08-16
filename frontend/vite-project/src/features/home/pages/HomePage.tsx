import React from "react";
import ComponentWrapper from "../../../common/layout/common/ComponentWrapper";
import PageContainer from "../../../common/layout/common/PageContainer";
import {
  KakaoMap,
  PaginationControls,
  SearchField,
  SearchResults,
  TabMenu,
} from "../components/index";
import { tabLabels } from "../data/data";
import useHomePageLogic from "../hooks/useHomePageLogic";

const HomePage: React.FC = () => {
  const {
    selectedTab,
    tabContent,
    keyword,
    searchResults,
    pagination,
    handleTabChange,
    handleSearch,
    handleDistrictClick,
    setKeyword,
  } = useHomePageLogic();

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
