import React, { useState, useContext } from "react";
import { MovieListDispatchContext } from "../MovieListContext";
import { MovieFilterDispatchContext } from "../MovieFilterContext";
import {
  LoadingBarContext,
  LoadingBarDispatchContext,
} from "../LoadingBarContext";
import "./Header.scss";
import { movieSearch } from "../helperFunctions";

const Search = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const setProgress = useContext(LoadingBarDispatchContext);
  const progress = useContext(LoadingBarContext);
  const [search, setSearch] = useState("");

  return (
    <form
      className="__Search"
      onSubmit={(e) =>
        movieSearch(
          e,
          search,
          setProgress,
          progress,
          setMovieList,
          setMovieFilter,
          setSearch
        )
      }
    >
      <input
        type="text"
        placeholder="Search by movie title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
