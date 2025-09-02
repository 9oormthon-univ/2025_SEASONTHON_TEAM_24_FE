import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './shared/components/common/BottomNav';
import Home from './pages/home';


function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[480px] min-w-[320px] bg-white relative px-6">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <BottomNav />
          </div>
        </Router>
      </div>
    </div>
  )
}
export default App
