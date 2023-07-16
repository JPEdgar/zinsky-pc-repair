import { BrowserRouter } from "react-router-dom";

import { FormProvider } from "./FormContext";
import { SiteProvider } from "./SiteContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <SiteProvider>
        <BrowserRouter>
          <FormProvider>{children}</FormProvider>
        </BrowserRouter>
      </SiteProvider>
    </>
  );
};

export default GlobalWrapper;
