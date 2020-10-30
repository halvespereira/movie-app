import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MovieListProvider } from "./MovieListContext";
import { MovieFilterProvider } from "./MovieFilterContext";
import { LoadingBarProvider } from "./LoadingBarContext";
import { CSSTransition } from "react-transition-group";

ReactDOM.render(
  <React.StrictMode>
    <MovieListProvider>
      <MovieFilterProvider>
        <LoadingBarProvider>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <App />
          </CSSTransition>
        </LoadingBarProvider>
      </MovieFilterProvider>
    </MovieListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
