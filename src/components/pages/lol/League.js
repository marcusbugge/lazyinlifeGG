import React, { Component, useEffect, useState } from "react";
import Countdown from "./Countdown";
import Header from "./Header";
import "./lol.css";
import Players from "./Players";

export default function League() {
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
      <Header />

      <div className="data">
        <div className="main-team-cnt">
          <div className="main-team-header">
            <h1>NORTHERN LEAGUE CHAMPIONSHIP</h1>
          </div>
        </div>
        <Players playerss={players} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="main-team-cnt">
          <div className="main-team-header">
            <h1>GOODGAME-LIGAEN</h1>
          </div>
        </div>
        <Players playerss={players} />
        
      </div>
    </div>
  );
}
