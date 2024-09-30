import { createSlice } from "@reduxjs/toolkit";

const accessSlice = createSlice({
  name: 'access',
  initialState : {
    isAccessed: false
  },
  reducers : {
    permit : (state) => {
      state.isAccessed = true
    },
    deny : (state) => {
      state.isAccessed = false
    }
  }
})

export const { permit, deny } = accessSlice.actions;
export default accessSlice.reducer;