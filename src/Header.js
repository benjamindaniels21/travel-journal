import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function Header() {
  return (
    <div className="header">
      <h1>Travel Journal</h1>
      <FontAwesomeIcon icon={regular("coffee")} />
    </div>
  );
}

export default Header;
