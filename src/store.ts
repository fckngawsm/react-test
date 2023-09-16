import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { userReducer } from "./features/users/users-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
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
