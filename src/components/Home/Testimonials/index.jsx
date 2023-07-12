import React from "react";

import { Container, Row } from "react-bootstrap";

import Testamony from "./Testamony";

import TestamonyData from "../../../data-dev/Testimonials.json";

export default function index() {
  return (
    <Container>
      <Row xs="12" md="6" lg="4" style={{ backgroundColor: "green" }}>
        {TestamonyData.map((data) => (
          <Testamony key={`testamony-key-${data.id}`} data={data} />
        ))}
      </Row>
    </Container>
  );
}
