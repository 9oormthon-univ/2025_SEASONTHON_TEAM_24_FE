import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './shared/components/common/BottomNav';
import Home from './pages/home';
import GoalSetting from './pages/goal';
import Survey from "./pages/survey/SurveyPage"

function AppContent() {
  const location = useLocation();
  const hideBottomNav = location.pathname === '/goalSetup' || location.pathname === '/survey' || location.pathname.startsWith('/survey/')

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goalSetup" element={<GoalSetting />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      {!hideBottomNav && <BottomNav />}
    </div>
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
  )
}
export default App
