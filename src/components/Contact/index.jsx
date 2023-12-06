import React from "react";

import { useCompanyContext } from "../../context/CompanyContext";
import ContactForm from "./ContactForm";
import PhoneIcon from "../elements/PhoneIcon";

const Contact = () => {
  const { companyInfo } = useCompanyContext();
  return (
    <>
      <div className="my-1">
        Call us at 
        <span className="px-2 py-1 m-1 bg-warning" style={{borderRadius: "5px", minHeight: "25px"}}>
          <PhoneIcon /> {companyInfo.phoneNumber}
        </span>
        or email by filling out the form below:
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
