import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gnbSlice from "./gnbSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    gnb: gnbSlice,
  },
});
