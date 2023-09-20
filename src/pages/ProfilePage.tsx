import React from "react";
import { useAppSelector } from "../redux-hooks";
import { currentUserInfo } from "../features/users/users-selectors";
import ProfileAdmin from "../components/Profile/ProfileAdmin";
import ProfileUser from "../components/Profile/ProfileUser";

function ProfilePage() {
  const user = useAppSelector(currentUserInfo);
  return <>{user?.isAdmin ? <ProfileAdmin /> : <ProfileUser />}</>;
}

export default ProfilePage;
