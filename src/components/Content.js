import React, { useContext } from "react";
import { StateContext } from "../MyContext";

const Content = () => {
  const featured = useContext(StateContext);

  return (
    <div>
      {featured.results.map((res) => (
        <h3 style={{ color: "#ffffff" }}>{res.title}</h3>
      ))}
    </div>
  );
};

export default Content;
