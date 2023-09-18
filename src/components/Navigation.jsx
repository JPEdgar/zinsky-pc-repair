import React, { useState } from "react";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import Logo from "../images/Zinsky Logo Vertical Alt.svg"
const Logo = "https://picsum.photos/100"

const Navigation = () => {
  const [expandNav, setExpandNav] = useState(false);

  const toggleExpand = () => {
    // 768px
    // console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      if (expandNav) closeNav();
      else openNav();
    }
  };

  const closeNav = () => {
    setExpandNav(false);
  };

  const openNav = () => {
    setExpandNav(true);
  };

  function getSnapshot() {
    return { width: window.innerWidth, height: window.innerHeight };
  }

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="justify-content-between"
        expand="md"
        expanded={expandNav}
        onClick={() => toggleExpand()}
        sticky="top"
      >
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="d-flex align-items-center">
            <Image src={Logo} className="mx-2" rounded />
            <span className="text-light">
              
            <div className="text-light">
                Zinsky's PC Repair
              </div>
              <div className="text-light fs-6">Serving you since 2008</div>
              
              </span>
            
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="me-2"
          aria-controls="navigation-bar"
          onClick={() => closeNav()}
        />
        <Navbar.Collapse id="navigation-bar" className="ps-2">
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
