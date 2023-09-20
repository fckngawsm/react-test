import { Root } from "react-dom/client";
import { RootState } from "../../store";

export const userInfoisAuthSelectors = (state: RootState) => state.user.isAuth;
export const userInfoSelectors = (state: RootState) => state.user.list;
export const currentUserInfo = (state: RootState) => state.user.user;
