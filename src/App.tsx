import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BottomNav from "./shared/components/common/BottomNav";
import AppLayout from "./shared/components/layout/AppLayout";
import Login from "./pages/login";

function AppContent() {
  const location = useLocation();
  const hideBottomNav = location.pathname === "/login";

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
