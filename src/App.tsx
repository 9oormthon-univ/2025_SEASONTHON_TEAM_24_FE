import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from "react";
import BottomNav from './shared/components/common/BottomNav';
import Home from './pages/home';
import Survey from "./pages/survey/SurveyPage"
import SurveyResult from './pages/survey/SurveyResult'
import StrategyListPage from './pages/strategy/StrategyListPage'
import AppLayout from "./shared/components/layout/AppLayout";
import Login from "./pages/login/index"
import Onboarding from "./pages/onboarding/OnboardingPage"
import GoalSetting from "./pages/goal/goalSetting"
import GoalResult from "./pages/goal/goalResult";
import { useAuthStore } from './stores/authStore';

function AppContent() {
  const location = useLocation();
  const hideBottomNav =
    location.pathname === "/goalSetup" ||
    location.pathname === "/survey" ||
    location.pathname.startsWith("/survey/") ||
    location.pathname === "/login" ||
    location.pathname === "/onboarding" || 
    location.pathname === "/goal-setting" || 
    location.pathname === "/goal-result" 

  const [searchParams] = useSearchParams();
  const { login } = useAuthStore();

  useEffect(() => {
    const status = searchParams.get("status");
    const refreshToken = searchParams.get("refreshToken");

    if (status === "login" && refreshToken) {
      login(refreshToken); // authStore에 저장
      localStorage.setItem("refreshToken", refreshToken);

      window.history.replaceState({}, document.title, "/");
    }
  }, [searchParams, login]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goal-setting" element={<GoalSetting />} />
        <Route path="/goal-result" element={<GoalResult />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey/result" element={<SurveyResult />} />
        <Route path="/strategyList" element={<StrategyListPage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/onboarding" element={<Onboarding />} /> 

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
