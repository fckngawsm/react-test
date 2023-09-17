export const REGISTER_USER = "http://localhost:4444/signup";
export const LOGIN_USER = "http://localhost:4444/signin";
// goods
export const LOADING_GOODS = "http://localhost:4444/goods";
export const DELETE_PRODUCT_BY_ID = (id: number) =>
  `http://localhost:4444/goods/${id}`;
