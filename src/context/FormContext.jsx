import React, { useState, useContext, createContext } from "react";

const FormContext = createContext();

const useFormContext = () => {
  return useContext(FormContext);
};

const FormProvider = ({ children }) => {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    buildFlag: false,
    repairFlag: false,
    restoreFlag: false,
    otherFlag: false,
    otherDescription: "",
  });

  const clearForm = () => {
    setFormInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      buildFlag: false,
      repairFlag: false,
      restoreFlag: false,
      otherFlag: false,
      otherDescription: "",
    });
  };

  // React.useEffect(() => console.log(formInfo), [formInfo]);

  return (
    <FormContext.Provider value={{ formInfo, setFormInfo, clearForm }}>
      {children}
    </FormContext.Provider>
  );
};

export { useFormContext, FormProvider };
