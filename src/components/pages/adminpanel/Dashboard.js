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
      {loaded
        ? players.map((player, index) => (
            <div key={index}>
              <div className="playerinfo">
                <div className="player-data-cnt">
                  <p className="role">{player.role}</p>
                  <p className="player">{player.gamertag}</p>
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
                <Edit index={index} game={player.game} player={player} />
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}

function GameSection({ title, games, loaded, show, extendCards, game }) {
  return (
    <div className="player-cnt">
      <h1>ACTIVE GAMES</h1>
      {loaded
        ? games.map((game, index) => (
            <div key={index}>
              <div className="playerinfo">
                <div className="player-data-cnt">
                  <p className="role">{game.name}</p>
                  <p className="player">{game.picture}</p>
                </div>
                <div className="player-edit-btn">
                  <button
                    onClick={() => extendCards(game.name, index)} // Pass game.name instead of game
                    className="edit-btn"
                  >
                    EDIT
                  </button>
                </div>
              </div>
              {show.game === game.name && show.index === index ? ( // Compare with game.name
                <Edit index={index} game={game.name} player={game} />
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}

const DUMMY_LOL_PLAYERS = [
  { role: "Mid", gamertag: "Player1", game: "lol" },
  { role: "Top", gamertag: "Player2", game: "lol" },
  { role: "Jungle", gamertag: "Player3", game: "lol" },
  { role: "ADC", gamertag: "Player4", game: "lol" },
  { role: "Support", gamertag: "Player5", game: "lol" },
];

const DUMMY_VAL_PLAYERS = [
  { role: "Sniper", gamertag: "PlayerA", game: "valorant" },
  { role: "Duelist", gamertag: "PlayerB", game: "valorant" },
  { role: "Controller", gamertag: "PlayerC", game: "valorant" },
  { role: "Initiator", gamertag: "PlayerD", game: "valorant" },
  { role: "Sentinel", gamertag: "PlayerE", game: "valorant" },
];

const DUMMY_OVW_PLAYERS = [
  { role: "Tank", gamertag: "Tanker", game: "overwatch" },
  { role: "Support", gamertag: "Healer", game: "overwatch" },
  { role: "DPS", gamertag: "Damage", game: "overwatch" },
  { role: "Tank", gamertag: "Tanker2", game: "overwatch" },
  { role: "Support", gamertag: "Healer2", game: "overwatch" },
];

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  const [lolplayers, setLolplayers] = useState([]);
  const [valplayers, setValplayers] = useState([]);
  const [ovwplayers, setOvwplayers] = useState([]);
  const [editGame, setEditGame] = useState(null);
  const [show, setShow] = useState({ game: null, index: -1 });

  const extendCards = (game, index) => {
    setShow({ game, index });
  };

  useEffect(() => {
    async function getAllPlayers(game, setPlayers) {
      const response = await fetch(`/api/players?game=${game}`);
      const data = await response.json();
      AOS.init();
    }

    setLolplayers(DUMMY_LOL_PLAYERS);
    setValplayers(DUMMY_VAL_PLAYERS);
    setOvwplayers(DUMMY_OVW_PLAYERS);

    getAllPlayers("lol", setLolplayers);
    setLoaded(true);
    getAllPlayers("valorant", setValplayers);
  }, []);

  return (
    <div className="dashboard-cnt">
      <div className="player-dash">
        <div className="dashboard-header">
          <h1>DASHBOARD</h1>
        </div>
        <div className="dashboard">
          <div className="players">
            <PlayerSection
              data-aos="fade-up"
              game="LEAGUE OF LEGENDS"
              title="LEAGUE OF LEGENDS"
              players={lolplayers}
              loaded={loaded}
              show={show}
              extendCards={extendCards}
            />
            <PlayerSection
              game="VALORANT"
              title="VALORANT"
              players={valplayers}
              loaded={loaded}
              show={show}
              extendCards={extendCards}
            />
            <PlayerSection
              game="OVERWATCH"
              title="OVERWATCH"
              players={ovwplayers}
              loaded={loaded}
              show={show}
              extendCards={extendCards}
            />
          </div>
        </div>
      </div>

      <div className="games-cnt">
        <Games />
      </div>
    </div>
  );
}
