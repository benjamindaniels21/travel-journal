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
        <h1 className="destination">Mount Fuji</h1>
        <p className="travel-dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Experience;
