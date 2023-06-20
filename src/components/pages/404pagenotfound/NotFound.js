import React from "react";
import "./notfound.css";

import computer from "../../../assets/computer.png";

export default function NotFound() {
  return (
    <div className="notFound">
      <img src={computer} alt="404-icon" />
      <div className="error-holder">
        <h1>Sorry, we cant find the page you're looking for.</h1>
        <p>Our devolopers are probably playing some soloq!</p>
      </div>
    </div>
  );
}
