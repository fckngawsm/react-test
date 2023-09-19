import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Header from "../Header/Header";
import "../../global.css";
import { useAppDispatch } from "../../redux-hooks";
import { checkAuth } from "../../features/users/users-slice";
import GoodsList from "../GoodsList/GoodsList";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(checkAuth(jwt));
    }
  }, [dispatch]);
  return (
    <div className="page">
      <main className="main">
        <Header />
        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/goods" element={<GoodsList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
