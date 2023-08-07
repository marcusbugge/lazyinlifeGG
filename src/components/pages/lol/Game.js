import React, { useEffect, useState } from "react";
import Header from "./Header";
import TeamSection from "./TeamSection";
import Playercard from "../../common/Playercard";
import orange from "../../../assets/orange.png";
import "./lol.css";

export default function Game({
  gameTitle,
  journeyUrl,
  leagues,
  twitchUrl,
  backgroundImage, // Include backgroundImage prop
}) {
  const [players, setPlayers] = useState([
    {
      name: "KYSER 1",
    },
    {
      name: "KYSER 2",
    },
    {
      name: "Erixen",
    },
    {
      name: "KYSER 3",
    },
    {
      name: "LIL STUD",
    },
  ]);

  useEffect(() => {
    getAllPlayers();

    async function getAllPlayers() {
      const response = await fetch(
        `/api/player/getplayersbygame?game=${gameTitle.toLowerCase()}`
      );
      const data = await response.json();
      setPlayers(data);
    }
  }, [gameTitle]);

  return (
    <div className={`content-${gameTitle.toLowerCase()}`}>
      <Header
        gameTitle={gameTitle}
        journeyUrl={journeyUrl}
        backgroundImage={backgroundImage}
      />{" "}
      {/* Pass backgroundImage here */}
      <div className="data">
        {leagues.map((league, index) => (
          <TeamSection
            key={index}
            leagueName={league.name}
            leagueUrl={league.url}
            players={players}
          />
        ))}
      </div>
      <div className="watch-game-cnt">
        <div className="liga-name">
          <a href={twitchUrl}>
            <p className="title-team">FOLLOW OUR JOURNEY</p>
          </a>
          <img src={orange} alt="orangepil" />{" "}
          {/* If you also want to use it here */}
        </div>
        <h1>WATCH OUR GAMES</h1>
        <h1>AT TWITCH.TV</h1>
      </div>
    </div>
  );
}
