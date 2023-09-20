import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Header from "../Header/Header";
import "../../global.css";
import { useAppDispatch } from "../../redux-hooks";
import { checkAuth } from "../../features/users/users-slice";
import GoodsList from "../GoodsList/GoodsList";
import ProfileAdmin from "../Profile/ProfileAdmin";
import ProfileOrder from "../Profile/ProfileAdminUsers";
import ProfileUsersList from "../Profile/ProfileAdminOrder";
import ProfileAdminUsers from "../Profile/ProfileAdminUsers";
import ProfileAdminOrder from "../Profile/ProfileAdminOrder";
import Cart from "../Cart/Cart";
import CartList from "../CartList/CartList";
import ProfilePage from "../../pages/ProfilePage";
import ProfileAdminAddProduct from "../Profile/ProfileAdminAddProduct";
import { jwt } from "../../constants/constants";
// import ProfileMyOrder from "../Profile/ProfileMyOrder";

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
