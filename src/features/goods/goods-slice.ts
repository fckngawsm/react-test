import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusType } from "../../types/statusType";
import { Extra } from "../../types/extraType";
import { GoodsType } from "../../types/goodsType";
import { current } from "@reduxjs/toolkit";

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
>("@@goods/loading", async (_, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.get(api.LOADING_GOODS);
    return res.data;
  } catch (error) {
    return rejectWithValue("У вас случилась ошибка");
  }
});

export const deleteProductById = createAsyncThunk<
  GoodsType,
  number,
  { extra: Extra; rejectWithValue: string }
>("@@goods/delete", async (id, { extra: { client, api }, rejectWithValue }) => {
  try {
    const res = await client.delete(api.DELETE_PRODUCT_BY_ID(id));
    return res.data;
  } catch (error) {
    return rejectWithValue("У вас случилась ошибка");
  }
});

export const updateProductById = createAsyncThunk<
  GoodsType,
  GoodsType,
  { extra: Extra; rejectWithValue: string }
>(
  "@@goods/update",
  async (data, { extra: { client, api }, rejectWithValue }) => {
    console.log(data);
    try {
      const res = await client.patch(api.UPDATE_PRODUCT_BY_ID(data.id), data);
      return res.data;
    } catch (err) {
      return rejectWithValue("Ошибка");
    }
  }
);

const GoodsSlice = createSlice({
  name: "@@goods",
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
        console.log(state.list);
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.status = "received";
        const newProduct = state.list.filter(
          (item) => item.id != action.payload.id
        );

        state.list = newProduct;
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        state.error = null;
        state.status = "received";
        const list = state.list;
        console.log(current(list));
      });
  },
});

export const goodsReducer = GoodsSlice.reducer;
