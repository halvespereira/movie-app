import React, { createContext, useState } from "react";

const MovieFilterContext = createContext(undefined);
const MovieFilterDispatchContext = createContext(undefined);

const MovieFilterProvider = ({ children }) => {
  const [movieFilter, setMovieFilter] = useState("popular");

  return (
    <MovieFilterContext.Provider value={movieFilter}>
      <MovieFilterDispatchContext.Provider value={setMovieFilter}>
        {children}
      </MovieFilterDispatchContext.Provider>
    </MovieFilterContext.Provider>
  );
};

export { MovieFilterContext, MovieFilterProvider, MovieFilterDispatchContext };
