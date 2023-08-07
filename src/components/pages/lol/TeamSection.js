import React from "react";
import orange from "../../../assets/orange.png";
import Playercard from "../../common/Playercard";

function TeamSection({ leagueName, leagueUrl, players }) {
  return (
    <div className="main-team-cnt">
      <div className="liga-name">
        <a href={leagueUrl}>
          <p className="title-team">{leagueName}</p>
        </a>
        <img src={orange} alt="orangepil" />
      </div>

      <h1 className="team-name">OUR ROSTER</h1>

      <div className="cards-cnt">
        <Playercard players={players} />
      </div>
    </div>
  );
}

export default TeamSection;
