import React, { useEffect } from "react";
import { HeaderLink, HeaderNavigation, HeaderWrapper } from "./HeaderStyle";
import { useAppDispatch } from "../../redux-hooks";
import { checkAuth } from "../../features/users/users-slice";
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
