import React, { useState, useEffect } from "react";
import "./Movie.scss";

const Movie = ({ movie }) => {
  const [details, setDetails] = useState(null);
  const getImg = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=690&q=80";

  const votingClass = () => {
    const vote = details.vote_average;
    if (Number(vote) >= 7.5) {
      return `__genreGood`;
    } else if (Number(vote) < 7.5 && Number(vote) >= 5) {
      return "__genreMedium";
    } else {
      return "__genreBad";
    }
  };

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
        <img
          src={movie.poster_path ? getImg + movie.poster_path : defaultImg}
          alt={movie.title}
        />
        <div className="__movieContent">
          <h2>{movie.title}</h2>
          <div className="__genres">
            {details.genres.map((genre, idx) => (
              <h4 className="__genre" key={idx}>
                {genre.name}
              </h4>
            ))}
          </div>
          <p className={`__rating ${votingClass()}`}>{details.vote_average}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Movie;
