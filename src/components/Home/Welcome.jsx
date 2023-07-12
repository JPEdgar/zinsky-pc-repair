import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="d-block d-md-none my-2">
      <div className="text-center fs-3 mb-4">
        Don't replace it, <b>repair it!</b>
      </div>
      <div className="mb-2">
        The big-name brands use the cheapest no-name parts they can find. You
        must always find out what kind of quality goes into their system. Some
        of their parts are proprietary, meaning you can only purchase a
        replacement through the manufacturer at inflated prices. These big-name
        manufacturers are starting to manufacture their computers using
        industry-standard parts and interfaces (connections), making replacing
        malfunctioning devices more effortless (and less expensive).
      </div>
      <div className="mb-2">
        Building or having a custom computer system built for you lets you have
        complete control of the quality of components and the upgradeability of
        your system.
      </div>
      <div className="mb-2">
        The possibilities of various configurations seem almost endless, from
        high-end gaming rigs, video/photo editing, professional music recording
        and editing, to lower budget, web surfing/email computers.
      </div>
      {/* <Button as={Link} to="/about" variant="primary" className="my-2">
        Learn More
      </Button> */}
    </div>
  );
};

export default Welcome;
