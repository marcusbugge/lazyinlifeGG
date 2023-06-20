import React, { useState, Component } from "react";
import PlayerIcon from "../../../assets/playericon.png";

export default function Players(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="cards-cnt">
      <div className="cards">
        {props.playerss.map((player, index) => (
          <div key={index}>
            <div className="card">
              <img src={PlayerIcon} alt="icon" />
              <div className="playertext">
                <div>
                  <h1>NAME</h1>
                  <p>{player.gamertag}</p>
                </div>
                <div>
                  <h1>ROLE</h1>
                  <p>{player.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
