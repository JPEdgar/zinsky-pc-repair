import React from "react";

import { Link } from "react-router-dom";
import { Col, Button, Row, Image } from "react-bootstrap";

import { useFormContext } from "../../../context/FormContext";

const Service = ({ data }) => {
  const { setFormInfo } = useFormContext();

  const handleClick = (state) => {
    setFormInfo((curr) => ({ ...curr, ...state }));
  };

  return (
    <>
      <Col
        xs={12}
        sm={6}
        lg={4}
        style={{ backgroundColor: "white", borderRadius: "15px" }}
        className="m-2 py-1"
      >
        <Row className="justify-content-center d-none d-sm-flex">
          <Image src={data.image} />
        </Row>
        <Row className="text-center">
          <h2>{data.title}</h2>
        </Row>
        <Row>
          <p>{data.body}</p>
        </Row>
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            as={Link}
            to="/contact"
            onClick={() => handleClick(data.state)}
          >
            Link to service
          </Button>
        </div>
      </Col>
    </>
  );
};

export default Service;
