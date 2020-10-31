import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MovieListProvider } from "./MovieListContext";
import { MovieFilterProvider } from "./MovieFilterContext";
import { LoadingBarProvider } from "./LoadingBarContext";
import { SearchProvider } from "./SearchContext";
import { PaginationPageProvider } from "./PaginationContext";
import { CSSTransition } from "react-transition-group";

ReactDOM.render(
  <React.StrictMode>
    <MovieListProvider>
      <MovieFilterProvider>
        <LoadingBarProvider>
          <SearchProvider>
            <PaginationPageProvider>
              <CSSTransition
                in={true}
                appear={true}
                timeout={1000}
                classNames="fade"
              >
                <App />
              </CSSTransition>
            </PaginationPageProvider>
          </SearchProvider>
        </LoadingBarProvider>
      </MovieFilterProvider>
    </MovieListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
