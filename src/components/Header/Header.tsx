import React from "react";
import { Link } from "react-router-dom";
import { HeaderLink, HeaderNavigation, HeaderWrapper } from "./HeaderStyle";
function Header() {
  return (
    <HeaderWrapper>
      <HeaderNavigation>
        <HeaderLink to="/goods">Товары</HeaderLink>
        <HeaderLink to="/profile">Мой профиль</HeaderLink>
      </HeaderNavigation>
    </HeaderWrapper>
  );
}

export default Header;
