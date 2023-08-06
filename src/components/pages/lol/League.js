import React, { Component, useEffect, useState } from "react";
import Playercard from "../../common/Playercard";
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
        <div className="team-desc-cnt">
          <h1 className="title-team">NLC</h1>
        
        </div>

        <div className="main-team-cnt">
          <div className="cards-cnt">
            <Playercard />
          </div>
        </div>

        <h1 className="title-team">GGL</h1>
        <div className="main-team-cnt">
          <div className="cards-cnt">
            <Playercard />
          </div>
        </div>
      </div>
    </div>
  );
}
