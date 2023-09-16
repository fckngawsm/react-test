import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";
import { StatusType } from "../../types/statusType";
import { Extra } from "../../types/extraType";

type AuthInitialState = {
  user: UserType | null;
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  user: null,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk<
  { token: string },
  UserType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@auth/register",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    try {
      const res = await client.post(api.REGISTER_USER, data);
      return res.data;
    } catch (error) {
      return rejectWithValue("У вас случилась ошибка");
    }
  }
);

export const loginUser = createAsyncThunk<
  UserType,
  UserType,
  { extra: Extra; rejectWithValue: string }
>("@@auth/login", async (data, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.post(api.LOGIN_USER, data);
    return res.data;
  } catch (error) {
    return rejectWithValue("У вас случилась ошибка");
  }
});

const UserSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "received";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "received";
      });
  },
});

export const userReducer = UserSlice.reducer;
