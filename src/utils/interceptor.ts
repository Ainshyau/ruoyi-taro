import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getStorageData } from '@/utils/storage';
import { ACCESS_TOKEN } from '@/store/mutation-types';

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getStorageData(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
