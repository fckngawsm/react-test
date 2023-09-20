import { ProductType } from "./productType";

export type CartType = {
  readonly id: number;
  readonly CartId: number;
  readonly ProductId: number;
  Product: ProductType;
};
