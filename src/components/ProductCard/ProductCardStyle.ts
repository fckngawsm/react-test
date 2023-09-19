import styled from "styled-components";

export const WrapperCard = styled.div`
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  margin: 20px 0;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonAdmin = styled.button`
  border: none;
  outline: none;
  width: 100px;
  padding: 6px;
  cursor: pointer;
`;

export const CardInformation = styled.div`
  width: 100%;
  color: black;
`;

export const CardCategories = styled.p`
  font-size: 16px;
  color: gray;
  text-decoration: underline;
  margin: 0;
`;

export const CardDetailsInformation = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const CardTitile = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const CardPrice = styled.h3`
  font-size: 14px;
  margin: 0;
  margin-bottom: 14px;
`;

export const ButtonBuy = styled.button`
  width: 150px;
  margin: 0 auto;
  border: 1px solid black;
  outline: none;
  display: block;
  padding: 6px 12px;
`;
