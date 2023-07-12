import React from "react";

import BGCarousel from "../components/BGCarousel";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import Testimonials from "../components/Testimonials";

export default function home() {
  return (
    <>
      <BGCarousel />
      <Services />
      <Welcome />
      <Testimonials />
    </>
  );
}
