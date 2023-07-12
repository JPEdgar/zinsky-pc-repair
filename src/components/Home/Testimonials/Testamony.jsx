import React from "react";

import { Col } from "react-bootstrap";

const Testamony = ({ data }) => {
  return (
    <Col className="mt-1" xs={12} md={6}>
      <div className="fs-4">From: {data.name}</div>
      <i>
        {data.data.map((testamony, index) => (
          <div key={`testamony-data-${index}`} className="mb-2">
            {testamony}
          </div>
        ))}
      </i>
    </Col>
  );
};

export default Testamony;
