import { LandingPage, EscapePage } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/escape" element={<EscapePage />} />
    </Routes>
  );
};

export default App;
