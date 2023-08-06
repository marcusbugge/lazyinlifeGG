import React from "react";
import lol from "../../assets/lol.png";
import valo from "../../assets/valo.png";
import ow from "../../assets/ow.png";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <div>
          <Link to="/games/league-of-legends">
            <img src={lol} alt="leagueoflegends" />
          </Link>
        </div>
        <div>
          <Link to="/games/valorant">
            <img src={valo} alt="valorant" />
          </Link>
        </div>
        <div>
          <Link to="/games/overwatch">
            <img src={ow} alt="overwatch" />
          </Link>
        </div>
      </div>
    </div>
  );
}
