import React from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

export default function ContactMe() {
  return (
    <Form>
      <Form.Group controlId="formBasicInfo" as={Row}>
        <Col xs="12" md="6">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Col>
        <Col xs="12" md="6">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Col>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" />
        <Form.Text className="text-muted">
          We'll never share your email or phone number with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox" className="mt-3">
        <Form.Text>How can I help?</Form.Text>
        <Form.Check type="checkbox" label="Build a PC" />
        <Form.Check type="checkbox" label="Repair my PC" />
        <Form.Check type="checkbox" label="Restore my PC" />
        <Form.Check type="checkbox" label="Other..." />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please describe.</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
