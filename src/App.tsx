import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import BottomNav from './shared/components/common/BottomNav';
import Home from './pages/home';
import GoalSetting from './pages/goal';
import Survey from "./pages/survey/SurveyPage"
import SurveyResult from './pages/survey/SurveyResult'
import StrategyListPage from './pages/strategy/StrategyListPage'
import AppLayout from "./shared/components/layout/AppLayout";
import Login from "./pages/login/index"
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();
  const hideBottomNav =
    location.pathname === "/goalSetup" ||
    location.pathname === "/survey" ||
    location.pathname.startsWith("/survey/") ||
    location.pathname === "/login";

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");
    const refreshToken = searchParams.get("refreshToken");

    if (status === "login" && refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);

      window.history.replaceState({}, document.title, "/");
    }
  }, [searchParams]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goalSetup" element={<GoalSetting />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey/result" element={<SurveyResult />} />
        <Route path="/strategyList" element={<StrategyListPage />} />
        <Route path="/login" element={<Login />} /> 

      </Routes>

      {!hideBottomNav && <BottomNav />}
    </AppLayout>
  );
}

function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container relative bg-white min-w-mobile-min pb-[100px]">
        <Router>
          <AppContent />
        </Router>
      </div>
    </div>
  );
}

export default App;
