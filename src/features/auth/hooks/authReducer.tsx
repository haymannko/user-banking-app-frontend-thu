import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@/app/api/axios";

// src/types.ts

export type RegisterFormData = {
  email: string;
  fullname: string;
  dateOfBirth: string;
  genderId: number;
  nationalityId: number;
  kycType: string;
  kycData: string;
};

export type User = {
  name: string;
  email: string;
  token: string;
};

const user = JSON.parse(localStorage.getItem("user") ?? "null");

const initialState = {
  user: user ? user : null,
  isLoading: false,
};

// ✅ Typed Register Thunk
export const register = createAsyncThunk<User, RegisterFormData>(
  "auth/register",
  async (userData: RegisterFormData, thunkAPI) => {
    try {
      const user = await authService.register(userData);
      return user;
    } catch (error: any) {
      // reject with error message
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Registration failed"
      );
    }
  }
);

// ✅ Typed Login Thunk (optional)
export const login = createAsyncThunk<
  User,
  { username: string; password: string }
>("auth/login", async (userData: any, thunkAPI) => {
  try {
    const user = await authService.login(userData);
    return user;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.response?.data?.message || "Login failed"
    );
  }
});

// Logout stays the same
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
  return {};
});

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
