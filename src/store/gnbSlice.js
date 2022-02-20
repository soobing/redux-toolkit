import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const gnbSlice = createSlice({
  name: "gnb",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = gnbSlice.actions;

export default gnbSlice.reducer;
