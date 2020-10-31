import React, { useContext, useState } from "react";
import { MovieListDispatchContext } from "../MovieListContext";
import { MovieFilterDispatchContext } from "../MovieFilterContext";
import {
  LoadingBarContext,
  LoadingBarDispatchContext,
} from "../LoadingBarContext";
import { SearchContext, SearchDispatchContext } from "../SearchContext";
import { PaginationPageDispatchContext } from "../PaginationContext";
import "./Header.scss";
import { movieSearch } from "../helperFunctions";

const Search = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const setProgress = useContext(LoadingBarDispatchContext);
  const progress = useContext(LoadingBarContext);
  const setSearch = useContext(SearchDispatchContext);
  const search = useContext(SearchContext);
  const setPaginationPage = useContext(PaginationPageDispatchContext);
  const [inputValue, setInputValue] = useState("");

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
          setInputValue,
          setPaginationPage
        )
      }
    >
      <input
        type="text"
        placeholder="Search by movie title"
        value={inputValue}
        onChange={(e) => {
          setSearch(e.target.value);
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
