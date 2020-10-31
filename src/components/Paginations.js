import React, { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./Pagination.scss";
import { SearchContext } from "../SearchContext";
import {
  LoadingBarContext,
  LoadingBarDispatchContext,
} from "../LoadingBarContext";
import {
  MovieListContext,
  MovieListDispatchContext,
} from "../MovieListContext";
import {
  MovieFilterContext,
  MovieFilterDispatchContext,
} from "../MovieFilterContext";
import {
  PaginationPageContext,
  PaginationPageDispatchContext,
} from "../PaginationContext";

import { paginationFetch } from "../helperFunctions";

export default function Paginations() {
  const search = useContext(SearchContext);
  const setProgress = useContext(LoadingBarDispatchContext);
  const progress = useContext(LoadingBarContext);
  const setMovieList = useContext(MovieListDispatchContext);
  const movieList = useContext(MovieListContext);
  const movieFilter = useContext(MovieFilterContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const paginationPage = useContext(PaginationPageContext);
  const setPaginationPage = useContext(PaginationPageDispatchContext);

  return (
    <div>
      <Pagination
        count={movieList ? movieList.total_pages : 10000}
        page={paginationPage}
        variant="outlined"
        shape="rounded"
        color="primary"
        className="__Pagination"
        onClick={(e) => {
          setPaginationPage(Number(e.target.textContent));
          paginationFetch(
            e,
            search,
            progress,
            setProgress,
            setMovieList,
            setMovieFilter,
            movieFilter
          );
        }}
      />
    </div>
  );
}
