import React, { useEffect } from "react";
import {
  HeaderLink,
  HeaderLinksInfo,
  HeaderNavigation,
  HeaderWrapper,
} from "./HeaderStyle";
import cart from "../../images/cart.svg";
import { useAppDispatch, useAppSelector } from "../../redux-hooks";
import { userInfoisAuthSelectors } from "../../features/users/users-selectors";
import { logOut } from "../../features/users/users-slice";
function Header() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(userInfoisAuthSelectors);
  function handleLogout() {
    dispatch(logOut());
  }
  return (
    <HeaderWrapper>
      {isAuth ? (
        <HeaderNavigation>
          <HeaderLink to="/goods">Товары</HeaderLink>
          <HeaderLinksInfo>
            <HeaderLink to="/cart">
              <img src={cart} alt="" width={"20px"} height={"20px"} />
            </HeaderLink>
            <HeaderLink to="/profile">Мой профиль</HeaderLink>
            <HeaderLink to="/sign-up" onClick={handleLogout}>
              Выйти
            </HeaderLink>
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
