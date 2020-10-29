import React, { createContext, useState } from "react";

const MovieListContext = createContext(undefined);
const MovieListDispatchContext = createContext(undefined);

const MovieListProvider = ({ children }) => {
  const [movieList, setMovieList] = useState(null);

  return (
    <MovieListContext.Provider value={movieList}>
      <MovieListDispatchContext.Provider value={setMovieList}>
        {children}
      </MovieListDispatchContext.Provider>
    </MovieListContext.Provider>
  );
};

export { MovieListContext, MovieListProvider, MovieListDispatchContext };
