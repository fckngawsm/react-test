import React, { useEffect } from "react";
import {
  HeaderLink,
  HeaderLinksInfo,
  HeaderNavigation,
  HeaderWrapper,
} from "./HeaderStyle";
import { useAppSelector } from "../../redux-hooks";
import { userInfoisAuthSelectors } from "../../features/users/users-selectors";
function Header() {
  const isAuth = useAppSelector(userInfoisAuthSelectors);
  return (
    <HeaderWrapper>
      {isAuth ? (
        <HeaderNavigation>
          <HeaderLink to="/goods">Товары</HeaderLink>
          <HeaderLinksInfo>
            <HeaderLink to="/profile">Мой профиль</HeaderLink>
            <HeaderLink to="/sign-up">Выйти</HeaderLink>
          </HeaderLinksInfo>
        </HeaderNavigation>
      ) : (
        <HeaderNavigation>
          <HeaderLink to="/goods">Товары</HeaderLink>
          <HeaderLink to="/sign-in">Войти</HeaderLink>
        </HeaderNavigation>
      )}
    </HeaderWrapper>
  );
}

export default Header;
