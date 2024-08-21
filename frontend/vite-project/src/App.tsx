import {
  LandingPage,
  EscapePage,
  BoardgamePage,
  CommunityPage,
  PartnershipPage,
  AuthPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/escape" element={<EscapePage />} />
      <Route path="/boardgame" element={<BoardgamePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/partnership" element={<PartnershipPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default App;
