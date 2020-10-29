import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MovieListProvider } from "./MovieListContext";
import { MovieFilterProvider } from "./MovieFilterContext";

ReactDOM.render(
  <React.StrictMode>
    <MovieListProvider>
      <MovieFilterProvider>
        <App />
      </MovieFilterProvider>
    </MovieListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
