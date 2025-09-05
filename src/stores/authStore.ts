import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isOnboardingCompleted: boolean;
}

interface AuthActions {
  login: (token: string) => void;
  checkAuth: () => void;
  completeOnboarding: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isLoggedIn: false,
  token: null,
  isOnboardingCompleted: false,

  // 로그인
  login: (token: string) => {
    localStorage.setItem('token', token);
    set({ isLoggedIn: true, token });
  },

  // 앱 시작시 토큰 체크
  checkAuth: () => {
    const token = localStorage.getItem('token');
    const onboardingCompleted = localStorage.getItem('onboardingCompleted') === 'true';

    if (token) {
      set({ 
        isLoggedIn: true, 
        token,
        isOnboardingCompleted: onboardingCompleted 
      });
    }
  },
  // 온보딩 완료 처리 (서베이 완료 후 호출)
  completeOnboarding: () => {
    localStorage.setItem('onboardingCompleted', 'true');
    set({ isOnboardingCompleted: true });
  },
}))