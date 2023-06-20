import React, { useState } from "react";
import "./homepage.css";
import pic1 from "../../assets/syhm.png"
import pic2 from "../../assets/tysker.png";
import pic3 from "../../assets/avarosa.png";
import pic4 from "../../assets/emil.png";
import arrow from "../../assets/arrow.png";
export default function Home() {
  const [renderDetails, setRenderDetails] = useState(false);

  const toggleRenderDetails = () => {
    setRenderDetails(!renderDetails);
  };

  return (
    <div className="homepage-cnt">
      <div className="home-top-cnt">
        <div className="home-header">
          <p className="over-h1">NORWEGIAN ESPORTS TEAM</p>

          <div className="teamname-cnt">
            <h1 className="under-h1">LAZY IN LIFE</h1>
          </div>
        </div>
      </div>

      <div className="explore-teams-cnt">
        <div
          className="lol-cnt"
          onMouseOver={toggleRenderDetails}
          onMouseLeave={toggleRenderDetails}
        >
          <div className="lolbg"></div>
          <div className="game-content">
            <h1 className="testt">LEAGUE OF LEGENDS</h1>
          </div>
        </div>

        <div className="valorant-cnt">
          <div className="valobg"></div>
          <div className="game-content">
            <h1 className="testt">VALORANT</h1>
          </div>
        </div>

        <div className="ow-cnt">
          <div className="owbg"></div>

          <div className="game-content">
            <h1 className="testt">OVERWATCH</h1>
          </div>
        </div>
      </div>

      <div className="compete-cnt">
        <p>DO YOU WANT TO JOIN US?</p>
        <h1>COMPETE WITH LIL</h1>

        <div className="apply-cnt">
          <div className="apply-btn">
            <p>APPLY NOW</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="pictures-cnt"></div>
    </div>
  );
}
