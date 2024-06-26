import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const deleteStoreList = createAsyncThunk("deleteStoreList", async (id:number) => {
  try {
    const response = await axios.post( "https://apistg.appnovahome.com/Store/Delete", {id},
        {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

interface StoreListState {
  storeListID: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: StoreListState = {
  storeListID: null,
  loading: false,
  error: null,
};

const deleteStoreSlice = createSlice({
  name: "storeList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(deleteStoreList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStoreList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.storeListID = action.payload;
      })
      .addCase(deleteStoreList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching users";
      });
  },
});

export default deleteStoreSlice;
