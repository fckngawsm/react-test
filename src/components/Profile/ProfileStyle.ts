import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
`;

export const ProfileTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-top: 15px;
`;

export const WrapperInformation = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
`;

export const WrapperNavigation = styled.nav`
  width: 200px;
  min-height: 80vh;
`;

export const ProfileNavigation = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 7px;
`;

export const ProfileMainInfo = styled.div`
  width: 700px;
  margin: 0 auto;
`;
