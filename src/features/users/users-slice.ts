import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";
import { StatusType } from "../../types/statusType";
import { Extra } from "../../types/extraType";
import { jwt } from "../../constants/constants";

type AuthInitialState = {
  user: UserType | null;
  list: UserType[];
  status: StatusType;
  error: string | null;
  isAuth: boolean;
};

const initialState: AuthInitialState = {
  user: null,
  list: [],
  status: "idle",
  error: null,
  isAuth: false,
};

export const loadingAllUsers = createAsyncThunk<
  { data: UserType[] },
  undefined,
  { extra: Extra; rejectValue: string }
>(
  "@@users/load-users",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_USERS, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error");
    }
  }
);

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
>(
  "@@auth/login",
  async (dataUser, { extra: { client, api }, rejectWithValue }) => {
    try {
      const { data } = await client.post(api.LOGIN_USER, dataUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = data;
      localStorage.setItem("jwt", token);
      return data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

export const checkAuth = createAsyncThunk<
  UserType,
  string,
  { extra: Extra; rejectWithValue: string }
>("@@user/isAuth", async (jwt, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.get(api.CHECK_JWT, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (err) {
    return rejectWithValue("Ошибка");
  }
});

const UserSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("jwt");
    },
  },
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
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(loadingAllUsers.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      });
  },
});

export const { logOut } = UserSlice.actions;
export const userReducer = UserSlice.reducer;
