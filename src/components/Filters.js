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
import { SearchDispatchContext } from "../SearchContext";
import { PaginationPageDispatchContext } from "../PaginationContext";
import { filterFunction } from "../helperFunctions";

const Filters = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const movieFilter = useContext(MovieFilterContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const setProgress = useContext(LoadingBarDispatchContext);
  const progress = useContext(LoadingBarContext);
  const setSearch = useContext(SearchDispatchContext);
  const setPaginationPage = useContext(PaginationPageDispatchContext);

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
              setMovieFilter,
              setSearch,
              setPaginationPage
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
