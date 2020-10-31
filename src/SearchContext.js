import React, { createContext, useState } from "react";

export const SearchContext = createContext(undefined);
export const SearchDispatchContext = createContext(undefined);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(null);

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={setSearch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
};
