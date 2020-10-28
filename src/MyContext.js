import React, { createContext, useState } from "react";

const StateContext = createContext(undefined);
const StateDispatchContext = createContext(undefined);

const StateProvider = ({ children }) => {
  const [state, setState] = useState("Hello");

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={setState}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider, StateDispatchContext };
