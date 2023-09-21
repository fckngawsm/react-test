import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks";
import { cartListSelectors } from "../cart-selectors";
import { loadingUserCart } from "../cart-slice";
import { WrapperCartList, CartIsEmpty } from "./CartListStyle";
import Order from "../../../components/Order/Order";
import Cart from "../../../components/Cart/Cart";

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
