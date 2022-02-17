import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header">
      <h1>Travel Journal</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default Header;
