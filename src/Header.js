import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="header">
        <FontAwesomeIcon icon={faGlobeAfrica} className="globe" />
        <h1>Travel Journal</h1>
      </div>
      <button className="button">Log a New Travel</button>
    </div>
  );
}

export default Header;
