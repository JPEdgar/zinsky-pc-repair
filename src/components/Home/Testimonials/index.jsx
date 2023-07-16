import React from "react";

import { Container, Row } from "react-bootstrap";

import Testamony from "./Testamony";
import { useSiteContext } from "../../../context/SiteContext";
import TestamonyData from "../../../data/Testimonials.json";
import TestamonyData_Dev from "../../../data-dev/Testimonials.json";

const Testimonials = () => {
  const { devFlag } = useSiteContext();
  const testamonyData = devFlag ? TestamonyData_Dev : TestamonyData;

  return (
    <>
      <Row>
        {testamonyData.map((data) =>
          data.id < 3 ? (
            <Testamony key={`testamony-key-${data.id}`} data={data} />
          ) : null
        )}
      </Row>
    </>
  );
};

export default Testimonials;
