import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: "",
  },
  reducers: {
    registerInfo: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { registerInfo } = authSlice.actions;
export default authSlice.reducer;
