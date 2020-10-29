import React, { useContext } from "react";
import { MovieListContext } from "../MovieListContext";
import Movie from "./Movie";
import "./Content.scss";

const Content = () => {
  const movieList = useContext(MovieListContext);

  if (movieList) {
    return (
      <div className="__Content">
        {movieList.results.map((result, idx) => (
          <Movie key={idx} movie={result} />
        ))}
      </div>
    );
  }
  return null;
};

export default Content;
