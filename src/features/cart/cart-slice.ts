import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusType } from "../../types/statusType";
import { Extra } from "../../types/extraType";
import { GoodsType } from "../../types/goodsType";
import { current } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";
import { CartType } from "../../types/cartType";
import { json } from "stream/consumers";

type cartInitialState = {
  list: CartType[];
  status: StatusType;
  error: string | null;
};

const initialState: cartInitialState = {
  list: [],
  status: "idle",
  error: null,
};

export const loadingUserCart = createAsyncThunk<
  CartType[],
  undefined,
  { extra: Extra; rejectWithValue: string }
>(
  "@@cart/loading-cart",
  async (_, { extra: { client, api }, rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await client.get(api.LOADING_USER_CART, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

export const addItemTocart = createAsyncThunk<
  ProductType,
  number,
  { extra: Extra; rejectWithValue: string }
>(
  "@@cart/add-item",
  async (ProductId, { extra: { client, api }, rejectWithValue }) => {
    const jwt = localStorage.getItem("jwt");
    try {
      const res = await client.post(
        api.ADD_ITEM_TO_CART,
        JSON.stringify({ ProductId }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

const CartSlice = createSlice({
  name: "@@cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadingUserCart.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(loadingUserCart.rejected, (state) => {
        state.status = "rejected";
        state.error = "cannot load data";
      })
      .addCase(loadingUserCart.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.list = action.payload;
      });
  },
});

export const cartReducer = CartSlice.reducer;
