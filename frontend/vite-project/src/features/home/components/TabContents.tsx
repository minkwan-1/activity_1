import React from "react";
import { Typography } from "@mui/material";

interface TabContentProps {
  selectedTab: string;
}

const tabContent: Record<string, JSX.Element> = {
  방탈출: (
    <Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        방탈출 (Escape Rooms)
      </Typography>
      서울 지역에 위치한 방탈출 카페에서 새로운 도전을 경험해 보세요! 다양한
      테마와 난이도의 방탈출 게임을 통해 친구, 가족, 동료와 함께 팀워크를
      발휘하며 미스터리를 해결해보세요.
    </Typography>
  ),
  보드게임: (
    <Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        보드게임 (Board Games)
      </Typography>
      서울 지역에 위치한 보드게임 카페입니다. 전략, 협력, 파티 게임 등 다양한
      종류의 게임을 제공하여 즐거운 시간을 보낼 수 있습니다.
    </Typography>
  ),
  커뮤니티: (
    <Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        커뮤니티 (Community)
      </Typography>
      방탈출과 보드게임을 좋아하는 사람들과 소통할 수 있는 커뮤니티입니다.
      이벤트, 모임, 정보 공유 등 다양한 활동을 통해 친구를 만들고 소통해보세요.
    </Typography>
  ),
  제휴: (
    <Typography>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        제휴 (Partnerships)
      </Typography>
      제휴된 장소와 할인 정보를 확인하고 특별한 혜택을 누려보세요. 다양한 제휴
      파트너와 함께 특별한 경험을 제공받을 수 있습니다.
    </Typography>
  ),
};

const TabContents: React.FC<TabContentProps> = ({ selectedTab }) => {
  return <>{tabContent[selectedTab]}</>;
};

export default TabContents;
