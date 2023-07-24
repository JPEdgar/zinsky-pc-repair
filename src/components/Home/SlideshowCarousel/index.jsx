import React, { useState } from "react";

import { Carousel, Row, Image, Button } from "react-bootstrap";

import CarouselModal from "./CarouselModal";
import { useSiteContext } from "../../../context/SiteContext";
import CarouselData from "../../../data/CarouselData.json";
import CarouselData_Dev from "../../../data-dev/CarouselData.json";

const SlideshowCarousel = () => {
  const { devFlag } = useSiteContext();
  const carouselData = devFlag ? CarouselData_Dev : CarouselData;

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
        <Carousel className="d-none d-md-block carousel_main">
          {carouselData &&
            carouselData.map((data) => (
              <Carousel.Item key={`CarouselItem-${data.id}`}>
                <Image src={data.image} className="w-100 carousel_image" />
                <Carousel.Caption className="carousel_caption">
                  <div className="carousel_header text_stroke_light">
                    {data.title}
                  </div>
                  <div className="carousel_subheader text_stroke_light">
                    {data.body}
                  </div>
                  <Button
                    className="my-1"
                    variant="info"
                    onClick={() => handleClick(data.modalData)}
                  >
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
