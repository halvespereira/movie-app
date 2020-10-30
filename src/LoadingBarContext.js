import React, { createContext, useState } from "react";

const LoadingBarContext = createContext(undefined);
const LoadingBarDispatchContext = createContext(undefined);

const LoadingBarProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <LoadingBarContext.Provider value={progress}>
      <LoadingBarDispatchContext.Provider value={setProgress}>
        {children}
      </LoadingBarDispatchContext.Provider>
    </LoadingBarContext.Provider>
  );
};

export { LoadingBarDispatchContext, LoadingBarProvider, LoadingBarContext };
