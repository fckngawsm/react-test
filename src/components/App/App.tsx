import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Auth/Register";
import { Wrapper } from "./AppStyle";
import Login from "../Auth/Login";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
