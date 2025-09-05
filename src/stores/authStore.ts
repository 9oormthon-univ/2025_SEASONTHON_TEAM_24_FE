import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
}

interface AuthActions {
  login: (token: string) => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isLoggedIn: false,
  token: null,

  // 로그인
  login: (token: string) => {
    localStorage.setItem('token', token);
    set({ isLoggedIn: true, token });
  },

  // 앱 시작시 토큰 체크
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ isLoggedIn: true, token });
    }
  },
}))