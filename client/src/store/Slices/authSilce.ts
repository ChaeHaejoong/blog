import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false
  },
  reducers : {
    login: () => {

    },
    logout: () => {

    }
  }
})

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;