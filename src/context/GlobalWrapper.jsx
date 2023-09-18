import { BrowserRouter } from "react-router-dom";

import { FormProvider } from "./FormContext";
import { SiteProvider } from "./SiteContext";
import { CompanyProvider } from "./CompanyContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <SiteProvider>
        <BrowserRouter>
          <CompanyProvider>
            <FormProvider>{children}</FormProvider>
          </CompanyProvider>
        </BrowserRouter>
      </SiteProvider>
    </>
  );
};

export default GlobalWrapper;
