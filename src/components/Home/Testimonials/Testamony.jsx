import React from "react";

import { Col } from "react-bootstrap";

const Testamony = ({ data }) => {
  return (
    <Col className="mt-1">
      <div>From: {data.name}</div>
      {data.data.map((testamony, index) => (
        <div key={`testamony-data-${index}`}>{testamony}</div>
      ))}
    </Col>
  );
};

export default Testamony;
