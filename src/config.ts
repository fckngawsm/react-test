export const REGISTER_USER = "http://localhost:4444/signup";
export const LOGIN_USER = "http://localhost:4444/signin";
export const CHECK_JWT = "http://localhost:4444/users/me";
export const ALL_USERS = "http://localhost:4444/users";
// goods
export const LOADING_GOODS = "http://localhost:4444/goods";
export const DELETE_PRODUCT_BY_ID = (id: number) =>
  `http://localhost:4444/goods/${id}`;
export const UPDATE_PRODUCT_BY_ID = (id: number) =>
  `http://localhost:4444/goods/${id}`;

console.log(UPDATE_PRODUCT_BY_ID(3));
