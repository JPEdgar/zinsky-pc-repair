import { BrowserRouter } from "react-router-dom";

import { FormProvider } from "./FormContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <FormProvider>{children}</FormProvider>
      </BrowserRouter>
    </>
  );
};

export default GlobalWrapper;
