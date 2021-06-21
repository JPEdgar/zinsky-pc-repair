import React from "react";

import { Container, Row } from "react-bootstrap";

import Testamony from "./Testamony";

export default function index() {
  return (
    <Container>
      <Row
        xs="12"
        md="6"
        lg="4"
        style={{ backgroundColor: "green" }}
      >
        <Testamony />
        <Testamony />
        <Testamony />
        <Testamony />
      </Row>
    </Container>
  );
}
