import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./Playercard.css";
import logo from "../../assets/logo.png";

export default function Playercard() {

  const playerList = [
    {
      name: "Bugge",
      role: "Mid",
      twitter: "test",
    },
    {
      name: "dgdfgfdg",
      role: "Mid",
      twitter: "test",
    },
    {
      name: "dfgdfgdfg",
      role: "Mid",
      twitter: "test",
    },
    {
      name: "Bugge",
      role: "Mid",
      twitter: "test",
    },
    {
      name: "sdfsdfsdfsfd",
      role: "Mid",
      twitter: "test",
    },
  ];

  const HoverCard = () => {
    return <div className="hovercard">hei</div>;
  };

  return (
    <div className="cards-cnt">
      <div className="cards">
        {playerList.map((player, index) => (
          <div className="cardcard" key={index}>
            <div className="card">
              <div className="cardimg">
                <img src={logo} alt="" />
              </div>

              <div className="playertext">
                <div>
                  <h1>{player.name}</h1>
                </div>
                <div>
                  <p>{player.role}</p>
                </div>
              </div>
            </div>
            <div className="role-cnt"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
