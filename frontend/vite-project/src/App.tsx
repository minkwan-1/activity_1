import { LandingPage, EscapePage, BoardgamePage } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/escape" element={<EscapePage />} />
      <Route path="/boardgame" element={<BoardgamePage />} />
    </Routes>
  );
};

export default App;
