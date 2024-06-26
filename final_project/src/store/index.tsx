import { configureStore } from "@reduxjs/toolkit";
import loginSlice, { logout } from "./loginSlice";
import storeCountSlice from "./storeCountSlice";
import storeListSlice from "./storeListSlice";
import deleteStoreSlice from "./deleteStoreItem";
import addStoreSlice from "./addStoreSlice";

const Store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    storeCount: storeCountSlice.reducer,
    storeList: storeListSlice.reducer,
    deleteStoreList: deleteStoreSlice.reducer,
    addStoreList: addStoreSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export { logout };
export default Store;
