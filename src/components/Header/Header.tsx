import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <Link to="/goods">Товары</Link>
        <Link to="/profile">Мой профиль</Link>
      </nav>
    </header>
  );
}

export default Header;
