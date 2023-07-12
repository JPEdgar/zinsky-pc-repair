import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <FontAwesomeIcon icon={faFacebook} /> Facebook and other social media
      links
    </div>
  );
}
