import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { cartListSelectors } from "../../features/cart/cart-selectors";
import Cart from "../Cart/Cart";
import { loadingUserCart } from "../../features/cart/cart-slice";
import { CartListButton, WrapperCartList } from "./CartListStyle";

function CartList() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartListSelectors);
  useEffect(() => {
    dispatch(loadingUserCart());
  }, [dispatch]);
  return (
    <WrapperCartList>
      {cart.map((item) => (
        <Cart key={item.id} {...item} />
      ))}
      <CartListButton>Оформить заказ</CartListButton>
    </WrapperCartList>
  );
}

export default CartList;