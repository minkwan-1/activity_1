import { Routes, Route } from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";
import AuthPage from "./features/auth/pages/AuthPage";

const App = () => {
  return (
    // 커밋확인용
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default App;
