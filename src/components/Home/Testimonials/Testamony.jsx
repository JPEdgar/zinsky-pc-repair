import React from "react";

import { Col } from "react-bootstrap";

export default function Testamony({ data }) {
  return (
    <Col className="mt-1">
      <div>From: {data.name}</div>
      {data.data.map((testamony) => (
        <div>{testamony}</div>
      ))}
    </Col>
  );
}
