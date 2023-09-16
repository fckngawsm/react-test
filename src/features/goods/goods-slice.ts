import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/userType";
import { StatusType } from "../../types/statusType";
import { Extra } from "../../types/extraType";
import { GoodsType } from "../../types/goodsType";

type AuthInitialState = {
  list: GoodsType[];
  status: StatusType;
  error: string | null;
};

const initialState: AuthInitialState = {
  list: [],
  status: "idle",
  error: null,
};

export const loadingAllGoods = createAsyncThunk<
  GoodsType[],
  undefined,
  { extra: Extra; rejectWithValue: string }
>("@@auth/register", async (_, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.get(api.LOADING_GOODS);
    return res.data;
  } catch (error) {
    return rejectWithValue("У вас случилась ошибка");
  }
});

const GoodsSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadingAllGoods.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadingAllGoods.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(loadingAllGoods.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload;
      });
  },
});

export const goodsReducer = GoodsSlice.reducer;
