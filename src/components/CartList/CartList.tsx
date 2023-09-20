import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { cartListSelectors } from "../../features/cart/cart-selectors";
import { loadingUserCart } from "../../features/cart/cart-slice";
import { WrapperCartList, CartIsEmpty } from "./CartListStyle";
import Order from "../Order/Order";
import Cart from "../Cart/Cart";

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
      {cart.length > 0 ? (
        <Order />
      ) : (
        <CartIsEmpty>Ваша корзина пуста </CartIsEmpty>
      )}
    </WrapperCartList>
  );
}

export default CartList;
