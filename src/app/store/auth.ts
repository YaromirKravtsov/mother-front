import create from 'zustand';
import axios from 'axios';
import AppService from '../api/service/AppService';
import { jwtDecode } from 'jwt-decode';
import $api from '../api/http';



interface BearState {
  loggedIn: boolean;
  role: string;
  isLoading: boolean;
  setLoggedIn: (value: boolean) => void;
  setRole: (role: string) => void;
  setIsLoading: (value: boolean) => void;
  login: (username: string, password: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<BearState>((set) => ({
  loggedIn: false,
  setLoggedIn: (value: boolean) => set(() => ({ loggedIn: value })),
  role: '',
  setRole: (role: string) => set(() => ({ role })),
  isLoading: true,
  setIsLoading: (value: boolean) => set(() => ({ isLoading: value })),
  
  login: async (username: string, password: string) => {
    set({ isLoading: true });
    try {
      const { data } = await AppService.login(username, password);
      const decodedToken: any = jwtDecode(data.accessToken);
      set({
        loggedIn: true,
        role: decodedToken.role,
        isLoading: false
      });
      localStorage.setItem('token', data.accessToken);
    } catch (error: any) {
      console.error(error);
      set({ isLoading: false });
    }
  },
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const response = await $api.get(`/token/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      const decodedToken: any = jwtDecode(response.data.accessToken);
      console.log('checkAuth')
      set({
        loggedIn: true,
        role: decodedToken.role,
        isLoading: false
      });

    } catch (error: any) {
      console.error(error.response?.data?.message);
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => {
    set({ loggedIn: false, role: '', isLoading: false });
    localStorage.removeItem('token');
    // Если необходимо сделать запрос на сервер для выхода
    $api.post('/logout', {}, { withCredentials: true })
      .then(() => {
        console.log('Successfully logged out');
      })
      .catch((error: any) => {
        console.error('Logout error', error);
      });
  },

}));
