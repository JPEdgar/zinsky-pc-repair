import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useCompanyContext } from "../../context/CompanyContext";
import PhoneIcon from "../elements/PhoneIcon";
import EmailIcon from "../elements/EmailIcon";

const ContactNow = () => {
  const { companyInfo } = useCompanyContext();
  return (
    <div className="d-flex justify-content-center w-100 h-100 bg-danger">
      <div className="text-light d-flex align-items-center">
        Need help now? Call
        <span
          className="bg-warning px-3 py-1 m-2 fw-bold fs-3"
          style={{ borderRadius: "5px" }}
        >
          <PhoneIcon />
          {companyInfo.phoneNumber}
        </span>
        or
        <Button
          as={Link}
          to="/Contact"
          className="ms-2 fw-bold"
          variant="warning"
        >
          <EmailIcon />
          Email us!
        </Button>
      </div>
    </div>
  );
};

export default ContactNow;
