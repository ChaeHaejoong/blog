import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./Slices/accessSlice";

const store = configureStore({
  reducer: {
    access: accessReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;