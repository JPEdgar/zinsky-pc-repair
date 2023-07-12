import React from "react";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import Service from "./Service";

import ServicesData from "../../../data-dev/ServicesData.json";

const Services = () => {
  return (
    <>
      <Row className="justify-content-evenly">
        {ServicesData &&
          ServicesData.map((data) => (
            <Service key={`Services-${data.id}`} data={data} />
          ))}
      </Row>
    </>
  );
};

export default Services;
