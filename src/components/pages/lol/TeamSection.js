import React, { useEffect, useState } from "react";
import orange from "../../../assets/orange.png";
import Playercard from "../../common/Playercard";
import Aos from "aos";
import axios from "axios";

function TeamSection({ leagueName, leagueUrl, players }) {
  useEffect(() => {
    Aos.init();
  });
  if (!players) {
    console.error("Players is undefined");
    return null; // or return a placeholder component, e.g., <div>Loading...</div>;
  }

  const filteredPlayers = players.filter(
    (player) => player.league === leagueName
  );

  console.log("player.league", players);
  console.log("leaguename", leagueName);

  return (
    <div className="main-team-cnt" data-aos="fade-up">
      <div className="liga-name">
        <a href={leagueUrl}>
          <p className="title-team">{leagueName}</p>
        </a>
        <img src={orange} alt="orangepil" />
      </div>

      <h1 className="team-name">OUR ROSTER</h1>

      <div className="cards-cnt">
        <Playercard players={filteredPlayers} />{" "}
        {/* Pass the filtered players */}
      </div>
    </div>
  );
}

export default TeamSection;
