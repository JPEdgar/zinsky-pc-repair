import React, { useState } from "react";

import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import HorzLogo from "../images/Logo_Zinsky_Outside.svg";
import VertLogo from "../images/Logo_Zinsky_Inside.svg";

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
        bg="light"
        variant="light"
        className="justify-content-between"
        expand="md"
        expanded={expandNav}
        onClick={() => toggleExpand()}
        sticky="top"
      >
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="d-block align-items-center">
            <div>
              <Image
                src={HorzLogo}
                height={130}
                width={360}
                className="d-none d-md-flex mx-2 "
                style={{ objectFit: "cover" }}
              />
              <Image
                src={VertLogo}
                height={180}
                width={180}
                className="d-md d-md-none mx-2 "
                style={{ objectFit: "cover" }}
              />
            </div>
        
            <div className="fs-6 text-center">
              Serving you since 2008
            </div>
       
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle className="me-2" aria-controls="navigation-bar" onClick={() => closeNav()} />
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
