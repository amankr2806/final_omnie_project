import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
const url =
  "https://apistg.appnovahome.com/Store/GetStores?06/25/2024%2000:00:00&ToDateTimeForCount=06/25/2024%2023:59:59&TimeZone=Asia/Calcutta&PageSize=-1&StatusId=-1";

export const getStoreList = createAsyncThunk("getStoreList", async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

interface StoreListState {
  storeList: any[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: StoreListState = {
  storeList: null,
  loading: false,
  error: null,
};

const storeListSlice = createSlice({
  name: "storeList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStoreList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStoreList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.storeList = action.payload;
      })
      .addCase(getStoreList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching users";
      });
  },
});

export default storeListSlice;
