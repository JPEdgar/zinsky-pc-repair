import React from "react";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-between"
        expand="md"
        sticky="top"
      >
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <Image src="https://picsum.photos/100" className="mx-2" rounded />
            Zinsky's PC Repair
          </Nav.Link>
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
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
