import React from "react";

import { Link } from "react-router-dom";
import { Col, Button, Row, Image, Card, Stack } from "react-bootstrap";

import { useFormContext } from "../../../context/FormContext";

const Service = ({ data }) => {
  const { setFormInfo } = useFormContext();

  const handleClick = (state) => {
    setFormInfo((curr) => ({ ...curr, ...state }));
  };

  return (
    <>
      <Col xs={12} sm={6} lg={3} className="justify-content-center d-flex">
        <Card style={{ width: "18rem" }} className="my-2">
          <Card.Img
            variant="top"
            src={data.image}
            className="d-none d-sm-flex mt-2 px-2"
          />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>

            <Card.Text style={{ minHeight: "40px" }}>{data.body}</Card.Text>

            <Button
              variant="primary"
              as={Link}
              to="/contact"
              onClick={() => handleClick(data.state)}
            >
              Link to service
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;

// <Col
// xs={12}
// sm={6}
// lg={4}
// style={{ backgroundColor: "white", borderRadius: "15px" }}
// className="m-2 pb-1 pt-3"
// >
// <Row className="justify-content-center d-none d-sm-flex">
//   <Image src={data.image} />
// </Row>

// <Row className="text-center fs-3">
//   <div></div>
// </Row>

// <Row>
//   <div>{data.body}</div>
// </Row>
// <div className="d-flex justify-content-center m-1">
//   <Button
//     variant="primary"
//     as={Link}
//     to="/contact"
//     onClick={() => handleClick(data.state)}
//   >
//     Link to service
//   </Button>
// </div>
// </Col>
