import React from "react";

import { Col } from "react-bootstrap";

const Testamony = ({ data }) => {
  return (
    <Col className="mt-1" xs={12} md={6}>
      <div>From: {data.name}</div>
      {data.data.map((testamony, index) => (
        <div key={`testamony-data-${index}`} className="mb-2">
          {testamony}
        </div>
      ))}
    </Col>
  );
};

export default Testamony;
