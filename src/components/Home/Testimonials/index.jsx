import React from "react";

import { Container, Row } from "react-bootstrap";

import Testamony from "./Testamony";

import TestamonyData from "../../../data-dev/Testimonials.json";

const Testimonials = () => {
  return (
    <Container>
      <Row xs="12" md="6" lg="4" style={{ backgroundColor: "green" }}>
        {TestamonyData.map((data) =>
          data.id < 3 ? (
            <Testamony key={`testamony-key-${data.id}`} data={data} />
          ) : null
        )}
      </Row>
    </Container>
  );
};

export default Testimonials;
