import React from "react";

import { Button } from "react-bootstrap";

export default function Welcome() {
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
      <Button variant="primary">Learn More</Button>{" "}
    </div>
  );
}
