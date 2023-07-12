import React from "react";

import { Container, Row } from "react-bootstrap";

import Testamony from "./Testamony";

import TestamonyData from "../../../data-dev/Testimonials.json";

const Testimonials = () => {
  return (
    <>
      <Row>
        {TestamonyData.map((data) =>
          data.id < 3 ? (
            <Testamony key={`testamony-key-${data.id}`} data={data} />
          ) : null
        )}
      </Row>
    </>
  );
};

export default Testimonials;
