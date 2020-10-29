import React, { useContext } from "react";
import "./Filters.scss";
import { MovieListDispatchContext } from "../MovieListContext";
import {
  MovieFilterContext,
  MovieFilterDispatchContext,
} from "../MovieFilterContext";

const Filters = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const movieFilter = useContext(MovieFilterContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const apiKey = "d2669e845450953087f55277f8eadfaf";

  const buttons = ["popular", "upcoming", "top_rated", "now_playing"];

  const filter = (e) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then(async (data) => {
        setMovieList(data);
        setMovieFilter(e.target.value);
      });
  };

  return (
    <div className="__Filters">
      {buttons.map((b, idx) => (
        <button
          value={b}
          key={idx}
          onClick={filter}
          className={b === movieFilter ? "__activeButton" : null}
        >
          {b.replace(/_/, " ")}
        </button>
      ))}
    </div>
  );
};

export default Filters;
