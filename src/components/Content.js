import React, { useContext } from "react";
import { MovieListContext } from "../MovieListContext";
import Movie from "./Movie";
import "./Content.scss";

const Content = () => {
  const movieList = useContext(MovieListContext);

  console.log(movieList);
  if (movieList) {
    return (
      <div className="__Content">
        <div className="__moviesDiv">
          {movieList.results.length ? (
            movieList.results.map((result, idx) => (
              <Movie key={idx} movie={result} />
            ))
          ) : (
            <h3 style={{ color: "#ffffff" }}>No results</h3>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default Content;
