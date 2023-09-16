import styled from "styled-components";

export const GoodsListWrapper = styled.section`
  display: grid;
  padding:50px;
  margin: 0 auto;
  max-width: 100%;
  width: 1280px;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  @media screen and (max-width: 1024px) {
    margin: 0;
    margin-top: 24px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media screen and (max-width: 450px) {
    margin: 20px 0;
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
