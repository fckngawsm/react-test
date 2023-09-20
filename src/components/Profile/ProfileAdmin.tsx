import React from "react";
import {
  SectionWrapper,
  ProfileTitle,
  WrapperInformation,
  WrapperNavigation,
  ProfileNavigation,
  ProfileLink,
} from "./ProfileStyle";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux-hooks";
import { currentUserInfo } from "../../features/users/users-selectors";

function ProfileAdmin() {
  const currentUser = useAppSelector(currentUserInfo);
  console.log(currentUser);
  return (
    <SectionWrapper>
      <WrapperInformation>
        <WrapperNavigation>
          <ProfileTitle>Привет, {currentUser?.name}</ProfileTitle>
          <ProfileNavigation>
            <ProfileLink to="order">Заказы</ProfileLink>
            <ProfileLink to="users">Пользователи</ProfileLink>
            <ProfileLink to="add-product">Добавить товар</ProfileLink>
          </ProfileNavigation>
        </WrapperNavigation>
        <Outlet />
      </WrapperInformation>
    </SectionWrapper>
  );
}

export default ProfileAdmin;
