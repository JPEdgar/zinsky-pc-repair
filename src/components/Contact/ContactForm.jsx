import React, { useState, useEffect, useRef } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

import { useFormContext } from "../../context/FormContext";

import { emailValidator, phoneValidator, formatPhoneNumber } from "../../utils";

const ContactForm = () => {
  const formData = useRef();
  // console.log(process.env);
  const key = process.env.REACT_APP_GOOGLE_RECAPTCYA_KEY;
  // const key = "6LerTyopAAAAAC_b7F0PwU6i6e-R9rgneKWBqEI4";
  const { formInfo, setFormInfo, clearForm } = useFormContext();
  const [recap, setRecap] = useState(null);
  const [errorFlag, setErrorFlag] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    otherDescription: false,
  });
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      setFormInfo((curr) => ({
        ...curr,
        [e.target.name]: formatPhoneNumber(e),
      }));
    } else
      setFormInfo((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    const value = formInfo[e.target.name] === false ? true : false;
    setFormInfo((curr) => ({ ...curr, [e.target.name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let returnError = {
      firstName: false,
      lastName: false,
      phone: false,
      email: false,
      message: false,
    };
    let hasErrorFlag = false;

    if (!formInfo.firstName) {
      returnError.firstName = true;
      hasErrorFlag = true;
    }
    if (!formInfo.lastName) {
      returnError.lastName = true;
      hasErrorFlag = true;
    }
    if (!formInfo.phone) {
      returnError.phone = true;
      hasErrorFlag = true;
    } else if (!phoneValidator(formInfo.phone)) {
      returnError.phone = true;
      hasErrorFlag = true;
      setPhoneError("Invalid phone number.");
    } else setPhoneError("");
    if (!formInfo.email) {
      returnError.email = true;
      hasErrorFlag = true;
      setEmailError("Email required.");
    } else if (!emailValidator(formInfo.email)) {
      returnError.email = true;
      hasErrorFlag = true;
      setEmailError("Invalid email.");
    } else {
      setEmailError("");
    }
    if (!formInfo.otherDescription) {
      returnError.message = true;
      hasErrorFlag = true;
    }

    setErrorFlag(returnError);

    // if (!hasErrorFlag) {
    //   emailjs
    //     .sendForm(
    //       process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //       formData.current,
    //       // {...tempData},
    //       process.env.REACT_APP_EMAILJS_USER_ID
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // }
  };

  const handleRecaptcha = (capData) => {
    setRecap(capData);
  };

  // useEffect(() => {
  //   console.log(formInfo);
  // }, [formInfo]);

  // useEffect(() => {
  //   console.log(errorFlag);
  // }, [errorFlag]);

  const style = { borderColor: "red" };

  return (
    <>
      <Form
        ref={formData}
        style={{ minHeight: "100vh" }}
        onSubmit={handleSubmit}
      >
        <Form.Group as={Row} className="my-2">
          <Col xs="12" md="6">
            <Form.Label className="mb-0">
              First Name <Form.Text muted>(required)</Form.Text>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formInfo.firstName}
              onChange={handleChange}
              style={errorFlag.firstName ? style : {}}
            />
          </Col>
          <Col xs="12" md="6">
            <Form.Label className="mb-0">
              Last Name <Form.Text muted>(required)</Form.Text>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formInfo.lastName}
              onChange={handleChange}
              style={errorFlag.lastName ? style : {}}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="mb-0">
            Email Address <Form.Text muted>(required)</Form.Text>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formInfo.email}
            onChange={handleChange}
            style={errorFlag.email ? style : {}}
          />
          {emailError && (
            <Form.Text className="text-danger">{emailError}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="mb-0">
            Phone Number <Form.Text muted>(required)</Form.Text>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number (916) 555-1212"
            name="phone"
            value={formInfo.phone}
            onChange={handleChange}
            style={errorFlag.phone ? style : {}}
          />
          {phoneError && (
            <Form.Text className="text-danger">{phoneError}</Form.Text>
          )}
        </Form.Group>

        <Form.Text className="text-muted">
          We'll <b className="me-1">never</b>
          share any of your information with anyone else.
        </Form.Text>

        <Form.Group className="my-3">
          <Form.Label className="mb-0">How can I help?</Form.Label>
          <Form.Check
            type="checkbox"
            label="Build a PC"
            name="buildFlag"
            checked={formInfo.buildFlag}
            onChange={handleCheck}
          />
          <Form.Check
            type="checkbox"
            label="Repair my PC"
            name="repairFlag"
            checked={formInfo.repairFlag}
            onChange={handleCheck}
          />
          <Form.Check
            type="checkbox"
            label="Restore my PC"
            name="restoreFlag"
            checked={formInfo.restoreFlag}
            onChange={handleCheck}
          />
          <Form.Check
            type="checkbox"
            label="Other..."
            name="otherFlag"
            checked={formInfo.otherFlag}
            onChange={handleCheck}
          />

          <Form.Group>
            <Form.Label className="mb-0">Please describe.</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="otherDescription"
              value={formInfo.otherDescription}
              onChange={handleChange}
              style={errorFlag.message ? style : {}}
            />
          </Form.Group>
        </Form.Group>

        {!recap && (
          <ReCAPTCHA
            sitekey={key}
            onChange={(capData) => handleRecaptcha(capData)}
          />
        )}

        <div className="mb-2">
          {(errorFlag.firstName ||
            errorFlag.lastName ||
            errorFlag.phone ||
            errorFlag.email ||
            errorFlag.message) && (
            <div className="text-danger">
              Fix errors above before submitting.
            </div>
          )}
          <Button
            variant="primary"
            type="submit"
            // disabled={!recap}
            className="me-2"
            style={{ minWidth: "100px" }}
          >
            Submit
          </Button>
          <Button
            variant="warning"
            type="button"
            style={{ minWidth: "100px" }}
            onClick={() => clearForm()}
          >
            Clear
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
