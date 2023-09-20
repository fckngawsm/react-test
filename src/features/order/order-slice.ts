import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusType } from "../../types/statusType";
import { Extra } from "../../types/extraType";
import { OrderType } from "../../types/orderType";

type OrderInitialState = {
  list: OrderType[];
  status: StatusType;
  error: string | null;
};

const initialState: OrderInitialState = {
  list: [],
  status: "idle",
  error: null,
};

export const loadingAllOrder = createAsyncThunk<
  OrderType[],
  undefined,
  { extra: Extra; rejectWithValue: string }
>(
  "@@order/loading-order",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await client.get(api.LOADING_ALL_ORDER, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

export const createOrder = createAsyncThunk<
  OrderType[],
  Pick<OrderType, "address" | "phone">,
  { extra: Extra; rejectWithValue: string }
>(
  "@@order/create-order",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await client.post(api.LOADING_ALL_ORDER, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);
const OrderSlice = createSlice({
  name: "@@order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadingAllOrder.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadingAllOrder.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(loadingAllOrder.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.list = action.payload;
      });
  },
});

export const orderReducer = OrderSlice.reducer;
