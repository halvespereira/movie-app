import React, { createContext, useState } from "react";

export const PaginationPageContext = createContext(undefined);
export const PaginationPageDispatchContext = createContext(undefined);

export const PaginationPageProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <PaginationPageContext.Provider value={page}>
      <PaginationPageDispatchContext.Provider value={setPage}>
        {children}
      </PaginationPageDispatchContext.Provider>
    </PaginationPageContext.Provider>
  );
};
