import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Header from "../Header/Header";
import "../../global.css";
import Goods from "../GoodsList/GoodsList";

function App() {
  return (
    <div className="page">
      <main className="main">
        <Header />
        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/goods" element={<Goods />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
