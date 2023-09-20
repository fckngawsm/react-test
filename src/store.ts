import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { userReducer } from "./features/users/users-slice";
import { goodsReducer } from "./features/goods/goods-slice";
import { cartReducer } from "./features/cart/cart-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    goods: goodsReducer,
    cart: cartReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
