import React from "react";
import Header from "./Header";
import TeamSection from "./TeamSection";
import orange from "../../../assets/orange.png";

export default function Game({
  gameTitle,
  journeyUrl,
  leagues,
  twitchUrl,
  backgroundImage,
  players,
}) {
  console.log("playersgame", players);
  return (
    <div className={`content-${gameTitle.toLowerCase()}`}>
      <Header
        gameTitle={gameTitle}
        journeyUrl={journeyUrl}
        backgroundImage={backgroundImage}
      />
      <div className="data" data-aos="fade-up">
        {leagues.map((league, index) => (
          <TeamSection
            key={index}
            leagueName={league.name}
            leagueUrl={league.url}
            players={players} // Passing all players to TeamSection
          />
        ))}
      </div>
      <div className="watch-game-cnt">
        <div className="liga-name">
          <a href={twitchUrl}>
            <p className="title-team">FOLLOW OUR JOURNEY</p>
          </a>
          <img src={orange} alt="orangepil" />
        </div>
        <h1>WATCH OUR GAMES</h1>
        <h1>AT TWITCH.TV</h1>
      </div>
    </div>
  );
}
