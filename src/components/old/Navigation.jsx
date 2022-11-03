import React from "react";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-between"
        expand="md"
      >
        <Navbar.Brand href="/">
          <Image src="https://picsum.photos/100" className="mx-2" rounded />
          Zinsky's PC Repair
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
