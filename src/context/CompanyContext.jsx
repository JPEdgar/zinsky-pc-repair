import React, { useState, useContext, createContext } from "react";

const CompanyContext = createContext();

const useCompanyContext = () => {
  return useContext(CompanyContext);
};

const CompanyProvider = ({ children }) => {
  const companyInfo = {
    email: "Zinsky.PCRepair@gmail.com",
    phoneNumber: "(916) 555-1212",
    webAddress: "ZinskyPCRepair.com"
  }

  return (
    <CompanyContext.Provider value={{ companyInfo }}>{children}</CompanyContext.Provider>
  );
};

export { useCompanyContext, CompanyProvider };
