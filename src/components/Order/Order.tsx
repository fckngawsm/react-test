import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { OrderType } from "../../types/orderType";
import { useAppDispatch } from "../../redux-hooks";
import { createOrder } from "../../features/order/order-slice";
import { CartListButton } from "../../features/CartList/CartListStyle";
import { useNavigate } from "react-router-dom";
import { clearUserCart } from "../../features/cart/cart-slice";
import { OrderDetails, OrderForm, OrderInput, OrderSubtitle, OrderTitle, WrapperOrderList } from "./OrderStyle";
function Order() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderType>();
  const onSubmit: SubmitHandler<Pick<OrderType, "address" | "phone">> = (
    data
  ) => {
    dispatch(createOrder(data))
      .unwrap()
      .then(() => {
        dispatch(clearUserCart());
      })
      .then(() => {
        navigate("/goods");
      });
  };
  return (
    <WrapperOrderList>
      <OrderTitle>Оформить заказ</OrderTitle>
      <OrderSubtitle>Введите ваши данные</OrderSubtitle>
      <OrderDetails>
        <OrderForm onSubmit={handleSubmit(onSubmit)}>
          <OrderInput
            autoComplete="none"
            placeholder="Адресс"
            {...register("address", {
              required: { value: false, message: "Вы забыли указать почту" },
              minLength: { value: 2, message: "Слишком короткая почта" },
              maxLength: { value: 1240, message: "Слишком длинная почта" },
            })}
            type="text"
          />
          <OrderInput
            autoComplete="none"
            placeholder="Номер телфона"
            {...register("phone", {
              required: { value: false, message: "Вы забыли указать почту" },
              minLength: { value: 2, message: "Слишком короткая почта" },
              maxLength: { value: 1240, message: "Слишком длинная почта" },
            })}
            type="tel"
          />
          <CartListButton>Оформить заказ</CartListButton>
        </OrderForm>
      </OrderDetails>
    </WrapperOrderList>
  );
}

export default Order;
