import { configureStore } from "@reduxjs/toolkit";
import loginSlice, { logout } from "./loginSlice";

const Store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { logout };
export default Store;
