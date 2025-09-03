import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './shared/components/common/BottomNav';
import Home from './pages/home';


function App() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container relative bg-white min-w-mobile-min">
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
