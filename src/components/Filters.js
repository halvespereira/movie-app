import React, { useContext } from "react";
import "./Filters.scss";
import { MovieListDispatchContext } from "../MovieListContext";

const Filters = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const apiKey = "d2669e845450953087f55277f8eadfaf";

  const buttons = ["popular", "upcoming", "top_rated", "now_playing"];

  const filter = (e) => {
    console.log(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then(async (data) => setMovieList(data));
  };

  return (
    <div className="__Filters">
      {buttons.map((b, idx) => (
        <button value={b} key={idx} onClick={filter}>
          {b.replace(/_/, "")}
        </button>
      ))}
    </div>
  );
};

export default Filters;
