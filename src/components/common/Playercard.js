import React from "react";
import "./Playercard.css";

function Playercard({ players }) {
  return (
    <div className="cards-cnt">
      <div className="cards">
        {players.map((player, index) => (
          <div className="cardcard" key={index}>
            <div className="card">
              <div className="playertext">
                <div>
                  <h1>{player.name}</h1>
                  {/* You can add more details here, like player.role, player.twitter */}
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

export default Playercard;
