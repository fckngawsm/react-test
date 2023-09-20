import React from "react";
import { ProfileMainInfo, ProfileTitle } from "./ProfileStyle";
import { useAppSelector } from "../../redux-hooks";
import { currentUserInfo } from "../../features/users/users-selectors";

function ProfileInformationMe() {
  const currentUser = useAppSelector(currentUserInfo);
  return (
    <ProfileMainInfo>
      <ProfileTitle>Имя: {currentUser?.name}</ProfileTitle>
      <ProfileTitle>Фамилия: {currentUser?.lastname}</ProfileTitle>
      <ProfileTitle>Почта: {currentUser?.email}</ProfileTitle>
    </ProfileMainInfo>
  );
}

export default ProfileInformationMe;
