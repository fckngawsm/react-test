import React from "react";
import {
  SectionWrapper,
  ProfileTitle,
  WrapperInformation,
  WrapperNavigation,
  ProfileNavigation,
  ProfileLink,
} from "./ProfileStyle";
import { currentUserInfo } from "../../features/users/users-selectors";
import { useAppSelector } from "../../redux-hooks";
import { Outlet } from "react-router-dom";
function ProfileUser() {
  const currentUser = useAppSelector(currentUserInfo);
  return (
    <SectionWrapper>
      <WrapperInformation>
        <WrapperNavigation>
          <ProfileTitle>Привет, {currentUser?.name}</ProfileTitle>
          <ProfileNavigation>
            <ProfileLink to="information-me">Информация обо мне</ProfileLink>
          </ProfileNavigation>
        </WrapperNavigation>
        <Outlet />
      </WrapperInformation>
    </SectionWrapper>
  );
}

export default ProfileUser;
