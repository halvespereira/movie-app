import React, { useContext } from "react";
import "./Filters.scss";
import { MovieListDispatchContext } from "../MovieListContext";
import {
  MovieFilterContext,
  MovieFilterDispatchContext,
} from "../MovieFilterContext";
import {
  LoadingBarContext,
  LoadingBarDispatchContext,
} from "../LoadingBarContext";
import { filterFunction } from "../helperFunctions";

const Filters = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const movieFilter = useContext(MovieFilterContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const setProgress = useContext(LoadingBarDispatchContext);
  const progress = useContext(LoadingBarContext);

  const buttons = ["popular", "upcoming", "top_rated", "now_playing"];

  return (
    <div className="__Filters">
      {buttons.map((b, idx) => (
        <button
          value={b}
          key={idx}
          onClick={(e) =>
            filterFunction(
              e,
              setProgress,
              progress,
              setMovieList,
              setMovieFilter
            )
          }
          className={b === movieFilter ? "__activeButton" : null}
        >
          {b.replace(/_/, " ")}
        </button>
      ))}
    </div>
  );
};

export default Filters;
