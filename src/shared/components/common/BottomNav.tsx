import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import {Home, Lightbulb, TrendingUp, User} from "lucide-react"

interface NavItem {
  path: string; 
  icon: React.ReactNode;
  label: string;
}

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      path: '/',
      icon: <Home size={24} />,
      label: '홈',
    },
    {
      path: '/strategy',
      icon: <Lightbulb size={24} />,
      label: '전략리스트',
    },
    {
      path: '/analysis',
      icon: <TrendingUp size={24} />,
      label: '성취분석',
    },
    {
      path: '/mypage',
      icon: <User size={24} />,
      label: '마이페이지',
    },
  ];

  function handleNavClick(path: string) {
    navigate(path);
  }

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="max-w-md px-4 mx-auto">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-gray-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`mb-1 ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-medium ${
                  isActive ? 'text-gray-700' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  )
}

export default BottomNav
