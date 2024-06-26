import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const token = localStorage.getItem("token");

interface FormValues {
    contactPerson: string;
    email: string;
    phoneNumber: string;
    partner: string;
    address1: string;
    address2: string;
    city: string;
    country: string;
    state: string;
    zip: string;
    storeService: {
      BAC: boolean;
      ISV: boolean;
      XYZ: boolean;
      TS: boolean;
    };
  }
export const addStoreList = createAsyncThunk(
  "addStoreList",
  async (formData: FormValues) => {
    try {
      const response = await axios.post(
        "https://apistg.appnovahome.com/Store/Insert",
        {formData},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

interface AddListState {
  addStore: any[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: AddListState = {
  addStore: null,
  loading: false,
  error: null,
};

const addStoreSlice = createSlice({
  name: "addStoreList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addStoreList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStoreList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.addStore = action.payload;
      })
      .addCase(addStoreList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error adding store";
      });
  },
});

export default addStoreSlice;
