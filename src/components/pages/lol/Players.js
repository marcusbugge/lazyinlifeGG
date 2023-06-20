import React, { useState, Component } from "react";
import PlayerIcon from "../../../assets/playericon.png";

export default function Players(props) {
  const [isShown, setIsShown] = useState(false);

  function hover(index) {
    console.log("hey");
    setIsShown(index);
  }
  const HoverCard = () => {
    return <div className="hovercard">henkw</div>;
  };

  return (
    <div className="cards-cnt">
      <div className="cards">
        {props.playerss.map((player, index) => (
          <div
            className="cardcard"
            onMouseEnter={() => hover(index)}
            onMouseLeave={() => hover(false)}
            key={index}
          >
            {isShown === index ? <HoverCard /> : ""}
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
