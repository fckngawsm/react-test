import styled from "styled-components";

export const WrapperOrderList = styled.div`
  width: 900px;
  margin: 0 auto;
`;
export const OrderTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  margin: 30px 0 50px;
`;
export const OrderSubtitle = styled.h3`
  font-size: 24px;
  text-align: center;
`;
export const OrderDetails = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const OrderPayment = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const OrderPaymentTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;
export const OrderPaymentDescription = styled.p`
  font-size: 16px;
  color: gray;
`;
export const OrderForm = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const OrderInput = styled.input`
  width: 100%;
  border: none;
  margin-top: 10px;
  background-color: transparent;
  padding: 6px 12px;
  border-bottom: 1px solid black;
`;
