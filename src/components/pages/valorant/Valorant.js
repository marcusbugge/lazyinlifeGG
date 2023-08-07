import React, { Component, useEffect, useState } from "react";
import Header from "./Header";
import "./valorant.css";
import Players from "./Players";
import Login from "../login/Login";
import Game from "../lol/Game";

export default function Valorant() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getAllPlayers();

    async function getAllPlayers() {
      const response = await fetch(
        "/api/player/getplayersbygame?game=valorant"
      );
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
        leagues={[
          {
            name: "GOODGAME-LIGAEN",
            url: "https://www.gamer.no/turneringer/good-game-ligaen-valorant-hosten-2023/11710/tabeller",
            teamName: "OUR ROSTER",
          },
        ]}
        twitchUrl="https://www.twitch.tv/lazyinlifetv"
      />
    </div>
  );
}
