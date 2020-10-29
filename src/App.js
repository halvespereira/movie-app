import React, { useContext, useState } from "react";
import "./App.scss";
import { MovieListContext, MovieListDispatchContext } from "./MovieListContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Filters from "./components/Filters";

function App() {
  const setMovieList = useContext(MovieListDispatchContext);
  const movieList = useContext(MovieListContext);
  const [filter, setFilter] = useState("popular");

  const apiKey = "d2669e845450953087f55277f8eadfaf";

  if (!movieList) {
    fetch(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      });
  }

  return (
    <div className="App">
      <Header />
      <Filters setFilter={setFilter} />
      <Content />
    </div>
  );
}

export default App;
