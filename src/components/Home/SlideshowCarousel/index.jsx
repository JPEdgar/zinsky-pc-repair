import React, { useState } from "react";

import { Carousel, Row, Image, Button } from "react-bootstrap";

import CarouselModal from "./CarouselModal";

import CarouselData from "../../../data-dev/CarouselData.json";

const SlideshowCarousel = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    header: "",
    body: "",
  });

  const handleClick = (modalData) => {
    setModalShow(true);
    setModalContent(modalData);
  };

  return (
    <>
      <Row>
        <Carousel className="d-none d-md-block" style={{ height: "300px" }}>
          {CarouselData &&
            CarouselData.map((data) => (
              <Carousel.Item key={`CarouselItem-${data.id}`}>
                <Image
                  src={data.image}
                  style={{
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                  className="w-100"
                />
                <Carousel.Caption
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <h3>{data.title}</h3>
                  <p>{data.body}</p>
                  <Button onClick={() => handleClick(data.modalData)}>
                    Learn More
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </Row>
      <CarouselModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalContent={modalContent}
      />
    </>
  );
};

export default SlideshowCarousel;
