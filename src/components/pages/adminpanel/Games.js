import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Games() {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({ name: "", backgroundUrl: "" });

  useEffect(() => {
    // Fetching games from the API when the component mounts
    axios
      .get("/api/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching games:", error);
      });
  }, []);

  const handleNameChange = (e) => {
    setNewGame({ ...newGame, name: e.target.value });
  };

  const handleBackgroundUrlChange = (e) => {
    setNewGame({ ...newGame, backgroundUrl: e.target.value });
  };

  const addGame = () => {
    // Sending a post request to add the game
    axios
      .post("http://localhost:8080/api/games", newGame)
      .then(() => {
        // Re-fetch the games to reflect the added game
        return axios.get("http://localhost:8080/api/games");
      })
      .then((response) => {
        setGames(response.data);
        setNewGame({ name: "", backgroundUrl: "" }); // Clear the input fields after adding the game
      })
      .catch((error) => {
        console.error("An error occurred while adding a game:", error);
      });
  };

  const deleteGame = (id) => {
    // Sending a delete request to remove the game
    axios
      .delete(`http://localhost:8080/api/games/${id}`)
      .then(() => {
        // Re-fetch the games to reflect the deleted game
        return axios.get("http://localhost:8080/api/games");
      })
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while deleting a game:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Game Name"
        value={newGame.name}
        onChange={handleNameChange}
        className="inputextend"
      />
      <input
        type="text"
        placeholder="Background URL"
        value={newGame.backgroundUrl}
        onChange={handleBackgroundUrlChange}
        className="inputextend"
      />
      <button onClick={addGame} className="save-btn">
        ADD
      </button>
      <ul>
        {games.map((game) => (
          <li key={game.id} className="playerinfo">
            {game.name} <img src={game.backgroundUrl} alt={game.name} />
            <button onClick={() => deleteGame(game.id)} className="edit-btn">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
