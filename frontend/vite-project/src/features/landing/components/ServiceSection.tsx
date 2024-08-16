import React from "react";
import { Grid, Box } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServiceSection: React.FC = () => (
  <Box sx={{ padding: "60px 20px", marginTop: "40px" }}>
    <SectionTitle>우리는 다음과 같은 서비스를 제공해요 🚀</SectionTitle>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ServiceCard
          title="방탈출 카페 정보"
          description="다양한 테마와 난이도의 방탈출 카페 정보를 통해 흥미로운 경험을 찾으세요."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ServiceCard
          title="보드게임 카페 정보"
          description="전략 게임부터 파티 게임까지 다양한 보드게임 카페 정보를 통해 즐거운 시간을 보세요."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ServiceCard
          title="제휴 혜택"
          description="제휴된 카페와 특별한 혜택을 통해 더 많은 즐거움을 경험하세요."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <ServiceCard
          title="커뮤니티"
          description="방탈출과 보드게임에 대한 정보를 공유하고, 커뮤니티 이벤트에 참여하여 함께 즐거운 시간을 보내세요."
        />
      </Grid>
    </Grid>
  </Box>
);

export default ServiceSection;
