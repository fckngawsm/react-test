import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { OrderType } from "../../types/orderType";
import { useAppDispatch } from "../../redux-hooks";
import { createOrder } from "../../features/order/order-slice";
import { CartListButton } from "../CartList/CartListStyle";
import { useNavigate } from "react-router-dom";
const WrapperOrderList = styled.div`
  width: 900px;
  margin: 0 auto;
`;
const OrderTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  margin: 30px 0 50px;
`;
const OrderSubtitle = styled.h3`
  font-size: 24px;
  text-align: center;
`;
const OrderDetails = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const OrderPayment = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const OrderPaymentTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;
const OrderPaymentDescription = styled.p`
  font-size: 16px;
  color: gray;
`;
const OrderForm = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const OrderInput = styled.input`
  width: 100%;
  border: none;
  margin-top: 10px;
  background-color: transparent;
  padding: 6px 12px;
  border-bottom: 1px solid black;
`;
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
