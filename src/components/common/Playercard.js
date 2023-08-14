import React from "react";
import "./Playercard.css";
import { Link } from "react-router-dom";

function Playercard({ players }) {
  return (
    <div className="cards-cnt">
      <div className="cards">
        {players.map((player) => (
          <Link to={`/players/${player.name}`} key={player.name}>
            <div className="cardcard">
              <div className="card">
                <div className="playertext">
                  <div>
                    <h1>{player.name}</h1>
                  </div>
                </div>
              </div>
              <div className="role-cnt"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Playercard;
