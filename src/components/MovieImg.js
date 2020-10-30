import React from "react";

const MovieImg = ({ movie }) => {
  const getImg = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=690&q=80";

  return (
    <img
      src={movie.poster_path ? getImg + movie.poster_path : defaultImg}
      alt={movie.title}
    />
  );
};

export default MovieImg;
