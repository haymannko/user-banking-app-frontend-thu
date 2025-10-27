import axios, { type AxiosInstance } from "axios";
import AppConfig from "../config/appConfig";

const API: AxiosInstance = axios.create({
  baseURL: AppConfig.BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

const API_URL = "https://banking-dummy-backend.onrender.com/api/";

// Register user
const register = async (userData: any) => {
  const response = await API.post(
    "/api/auth/register/personal-details",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData: any) => {
  const response = await API.post("api/auth/login", userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  logout,
  login,
};

export default authService;

//export default API;
