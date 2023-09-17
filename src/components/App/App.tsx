import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Header from "../Header/Header";
import "../../global.css";
import Goods from "../GoodsList/GoodsList";
import Popup from "../Popup/Popup";
import { GoodsType } from "../../types/goodsType";
import { useAppDispatch } from "../../redux-hooks";
import { checkAuth } from "../../features/users/users-slice";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  function handleOpenPopup() {
    setPopupOpen(true);
  }
  function handleClosePopup() {
    setPopupOpen(false);
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
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
          <Route
            path="/goods"
            element={
              <Goods
                popupOpen={popupOpen}
                handleClosePopup={handleClosePopup}
                handleOpenPopup={handleOpenPopup}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
