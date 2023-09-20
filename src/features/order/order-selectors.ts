import { RootState } from "../../store";

export const allOrdersSelector = (state: RootState) => state.order.list;
