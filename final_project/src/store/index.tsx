import { configureStore } from "@reduxjs/toolkit";
import loginSlice, { logout } from "./loginSlice";
import storeCountSlice from "./storeCountSlice";
import storeListSlice from "./storeListSlice";

const Store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    storeCount: storeCountSlice.reducer,
    storeList: storeListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { logout };
export default Store;
