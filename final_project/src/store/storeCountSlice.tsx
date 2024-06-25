import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getStoreCount = createAsyncThunk("getStoreCount", async () => {
  try {
    const response = await axios.get(
      "https://apistg.appnovahome.com/Store/GetStoreCount?StatusId=1",{
        headers: {
            Authorization: `Bearer ${token}`
        },
      }
    );
    console.log(response.data);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
  }
});

interface StoreCountState {
    storeCount: {
      activeStores: number;
      inactiveSores: number;
      totalStores: number;
    } | null;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: StoreCountState = {
    storeCount: null,
    loading: false,
    error: null,
  };
  

const storeCountSlice = createSlice({
    name: "storeCount",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(getStoreCount.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getStoreCount.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.storeCount = action.payload;
        })
        .addCase(getStoreCount.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? "Error fetching users";
        });
    },
  });
  
  export default storeCountSlice;