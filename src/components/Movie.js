import React, { useState, useEffect } from "react";
import "./Movie.scss";

import MovieContent from "./MovieContent";
import MovieImg from "./MovieImg";

const Movie = ({ movie }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=d2669e845450953087f55277f8eadfaf&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [movie.id]);

  if (details) {
    return (
      <div className="__Movie">
        <MovieImg movie={movie} />
        <MovieContent movie={movie} details={details} />
      </div>
    );
  }

  return null;
};

export default Movie;
