import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  username: string;
  password: string;
  token?: string | null;
}

interface UserState {
  loginDetail: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  loginDetail: null,
  loading: false,
  error: null,
};

export const Login = createAsyncThunk("Login", async (user: User) => {
  try {
    const response = await axios.post(
      "https://apistg.appnovahome.com/Account/Authenticate",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      
    );
    return response.data.data[0];
  } catch (error) {
    throw new Error("Error logging in");
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.loginDetail = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(Login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.loginDetail = action.payload;
      })
      .addCase(Login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching users";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice;
