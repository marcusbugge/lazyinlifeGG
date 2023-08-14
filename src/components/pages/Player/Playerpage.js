import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Playerpage.css";
import lil_logo from "../../../assets/logo.png";
import twitter from "../../../assets/twitter.png";
import Top from "../../../assets/top.png";
import Mid from "../../../assets/mid.png";
import Jungle from "../../../assets/jungle.png";
import Adc from "../../../assets/bot.png";
import Support from "../../../assets/support.png";

function Playerpage() {
  const { name } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/players/profile/${name}`)
      .then((response) => {
        setPlayer(response.data);
        console.log("player", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  if (!player) return <div>Loading...</div>;

  const fullName = player.fullname.split(" ");
  const firstName = fullName[0];
  const lastName = fullName.slice(1).join(" ");

  return (
    <div className="player-profile-cnt">
      <svg
        viewBox="0 0 1318 752"
        class="w-[82.375rem] flex-none"
        aria-hidden="true"
      >
        <path
          fill="url(#ee394704-5802-4a27-9451-3d29bf7415a3)"
          fill-opacity=".25"
          d="m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z"
        ></path>
        <defs>
          <linearGradient
            id="ee394704-5802-4a27-9451-3d29bf7415a3"
            x1="1452.56"
            x2="-101.59"
            y1="515.446"
            y2="760.592"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9DD556"></stop>
            <stop offset="1" stop-color="#05668d"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="playerprofile-header"></div>

      <div className="playertest">
        <div className="playerprofile-data-cnt">
          <img className="lillogo-profile" src={lil_logo} alt="lil_logo" />
          <div className="playerprofile-data">
            <p>{firstName.toUpperCase()}</p>
            <h1>{player.name.toUpperCase()}</h1>
            <p>{lastName.toUpperCase()}</p>
            <div className="detail-data">
              <div>
                <p>ROLE</p>

                <h1>{player.role.toUpperCase()}</h1>
              </div>
              <div>
                <p>COUNTRY</p>

                <h1>{player.country.toUpperCase()}</h1>
              </div>
              <div>
                <p>AGE</p>

                <h1>{player.age}</h1>
              </div>
            </div>
            <img className="twitterlogo" src={twitter} alt="twitter" />
          </div>
        </div>
      </div>

      {/* Render other player information here */}
    </div>
  );
}

export default Playerpage;
