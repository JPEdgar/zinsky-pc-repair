import React from "react";

import { Container, Row } from "react-bootstrap";
import Service from "./Service";

export default function index() {
  return (
    <Container>
      <Row
        style={{ backgroundColor: "blue" }}
        className="justify-content-md-center"
      >
        <Service title="New Computer" body="Build a new computer." />
        <Service title="Computer Repairs" body="Computer repairs." />
        <Service
          title="Data Recovery"
          body="Restore files from a damaged hard drive."
        />
        <Service title="Consoltation" body="What do you need?" />
      </Row>
    </Container>
  );
}
