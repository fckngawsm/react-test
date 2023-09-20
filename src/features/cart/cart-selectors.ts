import { RootState } from "../../store";

export const cartListSelectors = (state: RootState) => state.cart.list;
