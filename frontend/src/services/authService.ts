// src/services/authService.ts
import axios from "axios";

//const API_BASE = "http://localhost:8000/api/auth";
const API_BASE = import.meta.env.VITE_API_URL+"/auth";

export const getAccessToken = () => localStorage.getItem("access_token");
export const getRefreshToken = () => localStorage.getItem("refresh_token");

export const saveTokens = (access: string, refresh: string) => {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const clearTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const refreshAccessToken = async () => {
  const refresh = getRefreshToken();
  if (!refresh) throw new Error("No refresh token available");

  const res = await axios.post(`${API_BASE}/token/refresh/`, { refresh });
  const { access } = res.data;

  localStorage.setItem("access_token", access);
  return access;
};
// src/services/authService.ts
export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.href = "/"; // 🔁 Force reload and redirect to login
};
