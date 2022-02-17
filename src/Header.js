import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faGlobeAfrica} className="globe" />
      <h1>Travel Journal</h1>
    </div>
  );
}

export default Header;
