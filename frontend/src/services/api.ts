// src/services/api.ts
import axios from "axios";
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens,
  getRefreshToken,
} from "./authService";

const api = axios.create({
  //baseURL: "http://localhost:8000/api/",
  baseURL: import.meta.env.VITE_API_URL,
});

// 👉 Attach access token to all requests
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔁 Refresh token on 401 errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      getRefreshToken()
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${newAccessToken}`;
        return api(originalRequest); // 🔁 Retry with new access
      } catch (err) {
        clearTokens();
        window.location.href = "/"; // Redirect to login
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
