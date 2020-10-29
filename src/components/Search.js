import React, { useState, useContext } from "react";
import { MovieListDispatchContext } from "../MovieListContext";
import { MovieFilterDispatchContext } from "../MovieFilterContext";
import "./Header.scss";

const Search = () => {
  const setMovieList = useContext(MovieListDispatchContext);
  const setMovieFilter = useContext(MovieFilterDispatchContext);
  const [search, setSearch] = useState("");
  const apiKey = "d2669e845450953087f55277f8eadfaf";

  const movieSearch = (e) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
        setMovieFilter("");
      });

    setSearch("");
  };

  return (
    <form className="__Search" onSubmit={movieSearch}>
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
