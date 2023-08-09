import React from "react";
import { Link, useLocation } from "react-router-dom";
import lol from "../../assets/lol.png";
import valo from "../../assets/valo.png";
import ow from "../../assets/ow.png";

export default function Sidenav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <div className={isActive("/games/league-of-legends") ? "active" : ""}>
          <Link to="/games/league-of-legends">
            <img src={lol} alt="leagueoflegends" />
          </Link>
        </div>
        <div className={isActive("/games/valorant") ? "active" : ""}>
          <Link to="/games/valorant">
            <img src={valo} alt="valorant" />
          </Link>
        </div>
        <div className={isActive("/games/overwatch") ? "active" : ""}>
          <Link to="/games/overwatch">
            <img src={ow} alt="overwatch" />
          </Link>
        </div>
      </div>
    </div>
  );
}
