import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import BottomNav from "./shared/components/common/BottomNav";
import AppLayout from "./shared/components/layout/AppLayout";
import Login from "./pages/login";
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();
  const hideBottomNav = location.pathname === "/login";

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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>홈</div>} />
        {/* 다른 페이지들도 여기 추가 */}
      </Routes>

      {!hideBottomNav && <BottomNav />}
    </AppLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
