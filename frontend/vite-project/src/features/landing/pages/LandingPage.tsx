import { useNavigate } from "react-router-dom";
import PageContainer from "../../../common/layout/common/PageContainer";
import ComponentWrapper from "../../../common/layout/common/ComponentWrapper";
import { HeroSection, ServiceSection, CTASection } from "../components";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <ComponentWrapper>
        {/* Hero Section */}
        <HeroSection
          title="서울의 방탈출/보드게임 카페를 한눈에 🔍"
          description="서울 지역의 방탈출&보드게임 카페 정보를 공유하고, 제휴를 통해
        특별한 혜택을 제공하는 플랫폼입니다. 다양한 카페와 함께 새로운
        도전을 시작하세요."
          buttonText="시작하기"
          onClick={() => navigate("/home")}
        />

        {/* Service Section */}
        <ServiceSection />

        {/* CTA Section */}

        <CTASection
          title="지금 가입하고 특별한 혜택을 누리세요 ❗️"
          description="플랫폼에 가입하여 서울 지역의 방탈출과 보드게임 카페에 대한 정보를 얻고, 제휴 혜택을 통해 더 많은 즐거움을 경험하세요."
          buttonText="지금 가입하기"
          onClick={() => navigate("/")}
        />
      </ComponentWrapper>
    </PageContainer>
  );
};

export default LandingPage;
