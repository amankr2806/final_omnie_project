import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

const Store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
