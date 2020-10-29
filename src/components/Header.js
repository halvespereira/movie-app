import React, { useEffect, useState } from "react";
import Search from "./Search";
import "./Header.scss";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
const Header = () => {
  const [headerClass, setHeaderClass] = useState("");
  const listenScroll = (e) => {
    if (window.scrollY > 40) {
      setHeaderClass("__scrolledHeader");
    } else {
      setHeaderClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  });

  return (
    <header className={headerClass}>
      <div className="__logo">
        <TheatersOutlinedIcon
          style={{
            color: "#ffc107",
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
