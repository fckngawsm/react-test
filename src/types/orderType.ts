import { ProductType } from "./productType";

export type OrderType = {
  readonly id: number;
  address: string;
  phone: string;
  UserId: string;
  Products: ProductType;
};
