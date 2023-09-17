import { RootState } from "../../store";

export const userInfoisAuthSelectors = (state: RootState) => state.user.isAuth;
