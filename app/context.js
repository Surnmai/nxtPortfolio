"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [top, setTop] = useState(false);

  const closeMenuBar = () => {
    setShowNav(false);
  };
  return (
    <AppContext.Provider
      value={{ bg, setBg, showNav, setShowNav, top, setTop, closeMenuBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
