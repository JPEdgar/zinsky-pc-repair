import React, { useState, useEffect } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { useFormContext } from "../../context/FormContext";

const ContactForm = () => {
  const key = "6LerTyopAAAAAC_b7F0PwU6i6e-R9rgneKWBqEI4";
  const { formInfo, setFormInfo, clearForm } = useFormContext();
  const [recap, setRecap] = useState(null);

  const handleChange = (e) => {
    setFormInfo((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    const value = formInfo[e.target.name] === false ? true : false;
    setFormInfo((curr) => ({ ...curr, [e.target.name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("here")
  }

  const handleRecaptcha = (capData) => {
    setRecap(capData)
  }

  return (
    <>
      <Form style={{ minHeight: "100vh" }} onSubmit={handleSubmit}>
        <Form.Group as={Row} className="my-2">
          <Col xs="12" md="6">
            <Form.Label className="mb-0">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formInfo.firstName}
              onChange={handleChange}
            />
          </Col>
          <Col xs="12" md="6">
            <Form.Label className="mb-0">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formInfo.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="mb-0">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formInfo.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label className="mb-0">Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={formInfo.phone}
            onChange={handleChange}
          />
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
            />
          </Form.Group>
        </Form.Group>

        {!recap && <ReCAPTCHA sitekey={key} onChange={(capData) => handleRecaptcha(capData)} />}

        <div className="mb-2">
          <Button
            variant="primary"
            type="submit" // production
            
            disabled={!recap}
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
