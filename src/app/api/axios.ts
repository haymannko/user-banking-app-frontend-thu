import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://banking-dummy-backend.onrender.com/api";



// Register user
export const register = async (userData: any) => {
  const response = await axios.post(
    `${API_URL}/auth/register/personal-details`,
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: any) => {
  const response = await axios.post(
    `${API_URL}/auth/login`,
    userData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Login response:", response.data);

  if (response.data) {
    // Extract token
    const token = response.data.data?.accessToken;
    if (!token) throw new Error("Login failed: token missing");

    // Store token in cookie
    Cookies.set("token", token, {
      expires: 7,
      secure: true,
      sameSite: "strict",
    });

    // Store user info without token
    const { token: _, accessToken: __, ...userWithoutToken } = response.data;
    localStorage.setItem("user", JSON.stringify(userWithoutToken));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  Cookies.remove("token");
};



export const getProfile = async () => {
  const token = Cookies.get("token");
  if (!token) throw new Error("No token found");

  const response = await axios.get(`${API_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


const authService = {
  register,
  logout,
  login,
};

export default authService;
