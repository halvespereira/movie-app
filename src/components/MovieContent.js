import React from "react";
import { votingClass } from "../helperFunctions";
import "./Movie.scss";

const MovieContent = ({ movie, details }) => {
  return (
    <div className="__movieContent">
      <h2>{movie.title}</h2>
      <div className="__genres">
        {details.genres.map((genre, idx) => (
          <h4 className="__genre" key={idx}>
            {genre.name}
          </h4>
        ))}
      </div>
      <p className={`__rating ${votingClass(details)}`}>
        {details.vote_average}
      </p>
    </div>
  );
};

export default MovieContent;
