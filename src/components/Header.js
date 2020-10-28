import React from "react";
import Search from "./Search";
import Filters from "./Filters";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1 className="__title">Movie App</h1>
      <nav>
        <Filters />
        <Search />
      </nav>
    </header>
  );
};

export default Header;
