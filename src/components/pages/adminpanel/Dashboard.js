import React, { useEffect, useState } from "react";
import "./admin.css";
import Edit from "./Edit";
import Games from "./Games";
import AOS from "aos";
import "aos/dist/aos.css";

function PlayerSection({ title, players, loaded, show, extendCards, game }) {
  return (
    <div className="player-cnt">
      <h1>{title}</h1>
      {loaded && Array.isArray(players)
        ? players.map((player, index) => (
            <div key={index}>
              <div className="playerinfo">
                <div className="player-data-cnt">
                  <p className="player">{player.name}</p>
                </div>
                <div className="player-edit-btn">
                  <button
                    onClick={() => extendCards(game, index)}
                    className="edit-btn"
                  >
                    EDIT
                  </button>
                </div>
              </div>
              {show.game === game && show.index === index ? (
                <Edit
                  index={index}
                  game={player.game}
                  player={player}
                  close={() => extendCards(game, index)}
                />
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  const [playersByGame, setPlayersByGame] = useState({});
  const [show, setShow] = useState({ game: null, index: -1 });

  const extendCards = (game, index) => {
    if (show.game === game && show.index === index) {
      setShow({ game: null, index: -1 }); // Close the card if it's already opened
    } else {
      setShow({ game, index }); // Open the card if it's not already opened
    }
  };

  const gameIds = {
    "LEAGUE OF LEGENDS": 1,
    VALORANT: 2,
    OVERWATCH: 3,
  };

  useEffect(() => {
    async function getAllPlayers() {
      const games = ["LEAGUE OF LEGENDS", "VALORANT", "OVERWATCH"];
      let fetchedPlayersByGame = {};

      for (const game of games) {
        // Use the gameIds mapping to get the game ID for the current game name
        const gameId = gameIds[game];

        // Use the game ID in the URL
        const response = await fetch(
          `http://localhost:8080/api/games/${gameId}/players`
        );
        const data = await response.json();

        console.log("data", data);
        fetchedPlayersByGame[game] = data;
      }

      setPlayersByGame(fetchedPlayersByGame);
      setLoaded(true);
    }

    getAllPlayers();
  }, []);

  return (
    <div className="dashboard-cnt">
      <div className="player-dash">
        <div className="dashboard-header">
          <h1>DASHBOARD</h1>
        </div>
        <div className="dashboard">
          <div className="players">
            {loaded &&
              Object.keys(playersByGame).map((game, index) => (
                <PlayerSection
                  key={game}
                  data-aos="fade-up"
                  game={game}
                  title={game}
                  players={playersByGame[game]}
                  loaded={loaded}
                  show={show}
                  extendCards={extendCards}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="games-cnt">
        <Games />
      </div>
    </div>
  );
}
