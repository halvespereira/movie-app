import React, { useEffect, useContext } from "react";
import "./App.scss";
import { StateContext, StateDispatchContext } from "./MyContext";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const state = useContext(StateContext);
  const setState = useContext(StateDispatchContext);

  const apiKey = "d2669e845450953087f55277f8eadfaf";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, [setState]);

  console.log(state);
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
