import React from "react";
import "./about.css";
import pic1 from "../../../assets/syhm.png";
import pic2 from "../../../assets/tysker.png";
import pic3 from "../../../assets/avarosa.png";
import pic4 from "../../../assets/emil.png";
import logo from "../../../assets/logo.png";
import arrow from "../../../assets/arrow.png";

export default function About() {
  return (
    <div className="aboutpage">
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="text-cnt">
          <h1 className="tae">LAZY IN LIFE</h1>
          <div className="founded-cnt">
            <h1>FOUNDED IN 2020</h1>
          </div>
          <p>
            A esports team based in Norway with teams witin Valorant, Overwatch
            and League of Legends.
          </p>
        </div>
      </div>

      <div className="pictures-cnt">
        <img className="pic1" src={pic1} alt="pic1" />
        <img className="pic2" src={pic2} alt="pic1" />
        <img className="pic3" src={pic3} alt="pic1" />
        <img className="pic4" src={pic4} alt="pic1" />
      </div>
    </div>
  );
}
