"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <AppContext.Provider value={{ bg, setBg, showNav, setShowNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
