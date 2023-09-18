import React from "react";

import { useCompanyContext } from "../../context/CompanyContext";
import ContactForm from "./ContactForm";
import PhoneIcon from "../elements/PhoneIcon";

const Contact = () => {
  const { companyInfo } = useCompanyContext();
  return (
    <>
      <div>
        Call us at 
        <span className="px-2">
          <PhoneIcon /> {companyInfo.phoneNumber}
        </span>
        or email by filling out the form below:
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
