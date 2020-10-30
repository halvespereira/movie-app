import React, { useContext } from "react";
import "./App.scss";
import { MovieListContext, MovieListDispatchContext } from "./MovieListContext";
import { MovieFilterContext } from "./MovieFilterContext";
import {
  LoadingBarContext,
  LoadingBarDispatchContext,
} from "./LoadingBarContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Filters from "./components/Filters";
import LoadingBar from "react-top-loading-bar";

function App() {
  const setMovieList = useContext(MovieListDispatchContext);
  const movieList = useContext(MovieListContext);
  const MovieFilter = useContext(MovieFilterContext);
  const progress = useContext(LoadingBarContext);
  const setProgress = useContext(LoadingBarDispatchContext);

  const apiKey = "d2669e845450953087f55277f8eadfaf";

  if (!movieList) {
    fetch(
      `https://api.themoviedb.org/3/movie/${MovieFilter}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
        setProgress(progress + 50);
        setTimeout(() => {
          setProgress(progress + 100);
        }, 500);
      });
  }

  return (
    <div className="App">
      <LoadingBar
        color="#ffc107"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        transitionTime={300}
      />
      <Header />
      <Filters />
      <Content />
    </div>
  );
}

export default App;
