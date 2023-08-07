import React, { Component, useEffect, useState } from "react";
import Playercard from "../../common/Playercard";
import Countdown from "./Countdown";
import Header from "./Header";
import "./lol.css";
import Players from "./Players";
import orange from "../../../assets/orange.png";
import Game from "./Game";

export default function Valo() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getAllPlayers();

    async function getAllPlayers() {
      const response = await fetch("/api/player/getplayersbygame?game=lol");
      const data = await response.json();

      console.log(data);
      setPlayers(data);
    }
  }, []);

  return (
    <div className="content-lol">
      <Game
        gameTitle="Valorant"
        journeyUrl="https://www.your-journey-url.com"
        backgroundImage={require("../../../assets/Valorant.png")}
        leagues={[
          {
            name: "GOODGAME-LIGAEN",
            url: "https://www.gamer.no/turneringer/good-game-ligaen-league-of-legends-hosten-2023/11710/tabeller",
            teamName: "OUR ROSTER",
          },
        ]}
        twitchUrl="https://www.twitch.tv/lazyinlifetv"
      />
    </div>
  );
}
