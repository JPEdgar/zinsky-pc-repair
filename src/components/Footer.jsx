import React from "react";

import { Container, Row, Col, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="justify-content-between"
      sticky="bottom"
    >
      <div className="text-light bg-dark align-items-center px-2">
        Copyright &copy;2016-2023, Zinsky's PC Repair and Configuarations. All
        rights reserved.
      </div>
    </Navbar>
  );
};

export default Footer;

/*
Zinsky's PC Configurations
Servicing Rancho Cordova and the
Greater Sacramento area
(916) 622-2269
ZConfig@SBCGlobal.net
*/
