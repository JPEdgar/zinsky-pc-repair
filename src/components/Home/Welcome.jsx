import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="d-block d-md-none my-2">
      <div> Don't replace it, repair it!</div>
      <div>
        The big-name brands use the cheapest no-name parts they can find. You
        must always find out what kind of quality goes into their system. Some
        of their parts are proprietary, meaning you can only purchase a
        replacement through the manufacturer at inflated prices. These big-name
        manufacturers are starting to manufacture their computers using
        industry-standard parts and interfaces (connections), making replacing
        malfunctioning devices more effortless (and less expensive).
      </div>
      <Button as={Link} to="/about" variant="primary" className="my-2">
        Learn More
      </Button>
    </div>
  );
};

export default Welcome;
