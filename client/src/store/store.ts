import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSilce";

const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export default store;