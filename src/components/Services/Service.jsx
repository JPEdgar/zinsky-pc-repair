import React from "react";

import { Col, Card, Button } from "react-bootstrap";

export default function Service({ title, body }) {
  return (
    <Col >
      <Card xs={12} sm={6} md={4} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://picsum.photos/200"
          className="d-none d-sm-block"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary">Link to service</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
