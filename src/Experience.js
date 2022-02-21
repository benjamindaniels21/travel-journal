import React from "react";
import "./App.css";
// import japan from "./japan.jpeg";

function Experience(props) {
  console.log(props);
  return (
    <div className="experience">
      <img className="experience--image" src={props.img} alt="japan" />
      <div className="experience--info">
        <h3>{props.city}</h3>
        <a href="https://google.com">
          <p>View on Google Maps</p>
        </a>
        <h1 className="destination">{props.destination}</h1>
        <p className="travel-dates">{props.dates}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Experience;
