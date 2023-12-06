import React, { useState, useContext, createContext } from "react";

const SiteContext = createContext();

const useSiteContext = () => {
  return useContext(SiteContext);
};

const SiteProvider = ({ children }) => {
  const devFlag = false;

  return (
    <SiteContext.Provider value={{ devFlag }}>{children}</SiteContext.Provider>
  );
};

export { useSiteContext, SiteProvider };
