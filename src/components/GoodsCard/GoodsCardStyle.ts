import styled from "styled-components";

export const WrapperCard = styled.div`
  width: 270px;
  height: 340px;
  background-color: #edeff1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 180px;
  cursor: pointer;
`;

export const CardInfromation = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 55px;
  margin-top: 15px;
  color: black;
`;

export const CardCategories = styled.h3`
  color: #878787;
  text-decoration: underline;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 1.2;
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  height: auto;
  overflow: hidden;
  margin: 0;
`;

export const CardPurchase = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.2px;
  font-weight: 600;
`;

export const CardCart = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin-right: 40px;
`;
