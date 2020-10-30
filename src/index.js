import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MovieListProvider } from "./MovieListContext";
import { MovieFilterProvider } from "./MovieFilterContext";
import { LoadingBarProvider } from "./LoadingBarContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieListProvider>
      <MovieFilterProvider>
        <LoadingBarProvider>
          <App />
        </LoadingBarProvider>
      </MovieFilterProvider>
    </MovieListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
