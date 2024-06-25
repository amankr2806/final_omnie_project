import { configureStore } from "@reduxjs/toolkit";
import loginSlice, { logout } from "./loginSlice";
import storeCountSlice from "./storeCountSlice";

const Store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    storeCount: storeCountSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { logout };
export default Store;
