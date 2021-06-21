import React from "react";

import { Carousel, Row, Image } from "react-bootstrap";

export default function BGCarousel() {
  return (
    <>
      <Row>
        <Carousel className="d-none d-md-block">
          <Carousel.Item>
            <Image
              src="https://picsum.photos/500/100"
              fluid
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://picsum.photos/500/100"
              fluid
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://picsum.photos/500/100"
              fluid
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
}
