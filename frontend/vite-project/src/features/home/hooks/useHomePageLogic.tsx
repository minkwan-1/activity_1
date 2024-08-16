import { useState, useCallback } from "react";

interface SearchResult {
  place_name: string;
  road_address_name?: string;
  address_name: string;
  phone?: string;
}

interface Pagination {
  current: number;
  last: number;
  gotoPage: (page: number) => void;
}

declare const kakao: any;

const useHomePageLogic = () => {
  const [selectedTab, setSelectedTab] = useState("방탈출");
  const [keyword, setKeyword] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const tabContent = [
    <div key="0">방탈출 관련 콘텐츠</div>,
    <div key="1">보드게임 관련 콘텐츠</div>,
    <div key="2">커뮤니티 관련 콘텐츠</div>,
    <div key="3">제휴 관련 콘텐츠</div>,
  ];

  const handleTabChange = useCallback(
    (tabLabel: string) => {
      setSelectedTab(tabLabel);
      if (selectedDistrict) {
        searchInDistrict(selectedDistrict, tabLabel);
      }
    },
    [selectedDistrict]
  );

  const handleSearch = useCallback(() => {
    if (!keyword.trim()) {
      alert("키워드를 입력해주세요!");
      return;
    }
    if (selectedTab === "방탈출" || selectedTab === "보드게임") {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(keyword, placesSearchDB);
    }
  }, [keyword, selectedTab]);

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

  const searchInDistrict = useCallback(
    (districtName: string, tabLabel: string) => {
      if (tabLabel === "방탈출" || tabLabel === "보드게임") {
        const searchKeyword = `${districtName} ${tabLabel}`;
        setKeyword(searchKeyword);
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword, placesSearchDB);
      }
    },
    []
  );

  const handleDistrictClick = useCallback(
    (districtName: string) => {
      setSelectedDistrict(districtName);
      searchInDistrict(districtName, selectedTab);
    },
    [selectedTab, searchInDistrict]
  );

  return {
    selectedTab,
    tabContent,
    keyword,
    searchResults,
    pagination,
    handleTabChange,
    handleSearch,
    handleDistrictClick,
    setKeyword,
  };
};

export default useHomePageLogic;
