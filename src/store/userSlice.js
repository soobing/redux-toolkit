import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: "seller",
  session: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userType = action.payload;
    },
    login: (state, action) => {
      state.session = action.payload;
    },
    logout: (state) => {
      state.session = null;
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;

export default userSlice.reducer;
