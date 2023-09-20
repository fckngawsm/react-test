import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 1280px;
  margin: 0 auto;
  border-bottom: 1px solid grey;
  padding: 10px 15px 20px;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLinksInfo = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:focus {
    color: red;
  }
`;
