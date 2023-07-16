import React from "react";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import Service from "./Service";
import { useSiteContext } from "../../../context/SiteContext";
import ServicesData from "../../../data/ServicesData.json";
import ServicesData_Dev from "../../../data-dev/ServicesData.json";

const Services = () => {
  const { devFlag } = useSiteContext();

  const siteData = devFlag ? ServicesData_Dev : ServicesData;

  return (
    <>
      <Row className="justify-content-evenly">
        {siteData &&
          siteData.map((data) => (
            <Service key={`Services-${data.id}`} data={data} />
          ))}
      </Row>
    </>
  );
};

export default Services;
