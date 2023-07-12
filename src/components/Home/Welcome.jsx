import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h2 className="mx-auto">Welcome</h2>
      <p>A little info about the company.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In minus vitae
        amet repellat. Numquam ut dicta quos voluptates tempore aspernatur quia
        ipsum incidunt officiis, dignissimos est debitis voluptate tempora
        porro?
      </p>
      <Button as={Link} to="/about" variant="primary">
        Learn More
      </Button>
    </div>
  );
};

export default Welcome;
