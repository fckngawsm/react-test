import React, { useEffect } from "react";
import "../../global.css";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../../redux-hooks";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Header from "../Header/Header";
import GoodsList from "../GoodsList/GoodsList";
import ProfileAdminUsers from "../Profile/ProfileAdminUsers";
import ProfileAdminOrder from "../Profile/ProfileAdminOrder";
import CartList from "../CartList/CartList";
import ProfileAdminAddProduct from "../Profile/ProfileAdminAddProduct";
import { checkAuth } from "../../features/users/users-slice";
import { jwt } from "../../constants/constants";
import ProfilePage from "../../pages/ProfilePage";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwt) {
      dispatch(checkAuth(jwt));
    }
  }, []);
  return (
    <div className="page">
      <main className="main">
        <Header />
        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/goods" element={<GoodsList />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="order" element={<ProfileAdminOrder />} />
            <Route path="users" element={<ProfileAdminUsers />} />
            <Route path="add-product" element={<ProfileAdminAddProduct />} />
          </Route>
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
