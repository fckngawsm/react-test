import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 20px auto;
  padding-bottom: 12px;
  border-bottom: 1px solid black;
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
export const CartImage = styled.img`
  width: 150px;
  height: 150px;
`;
export const CartItemDescription = styled.div`
  margin-left: 15px;
`;
export const CartItemTitle = styled.h3`
  font-size: 20px;
  margin: 0;
`;
export const CartItemAuthor = styled.p`
  margin: 0;
  margin-top: 10px;
  color: gray;
`;
export const CartItemDetails = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CartItemButton = styled.button`
  width: 13px;
  height: 13px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  margin-left: 20px;
  width: 30px;
  height: 30px;
`;
export const CartImageForButton = styled.img`
  width: 100%;
  height: 100%;
`;
export const CartItemPrice = styled.h4`
  font-size: 23px;
  margin: 0;
  font-weight: 400;
`;
