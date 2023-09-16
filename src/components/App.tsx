import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Auth/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
