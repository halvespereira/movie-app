import React from "react";
import Search from "./Search";
import "./Header.scss";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
const Header = () => {
  return (
    <header>
      <div className="__logo">
        <TheatersOutlinedIcon
          style={{
            color: "#f9df60",
            fontSize: "43px",
          }}
        />
        <h1 className="__title">Movie App</h1>
      </div>

      <Search />
    </header>
  );
};

export default Header;
