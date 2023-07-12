import React from "react";

import { Container } from "react-bootstrap";

import SlideshowCarousel from "./SlideshowCarousel";
import Services from "./Services";
import Welcome from "./Welcome";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <SlideshowCarousel />
      <Welcome />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
