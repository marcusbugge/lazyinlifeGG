import React, { useState } from "react";

export default function Games() {
  const [games, setGames] = useState([
    { name: "League of Legends", picture: "browserurl.png" },
    { name: "Valorant", picture: "browserurl2.png" },
    { name: "Overwatch", picture: "browserurl3.png" },
  ]);
  const [newGame, setNewGame] = useState({ name: "", picture: "" });

  const handleNameChange = (e) => {
    setNewGame({ ...newGame, name: e.target.value });
  };

  const handlePictureURLChange = (e) => {
    setNewGame({ ...newGame, picture: e.target.value });
  };

  const addGame = () => {
    setGames([...games, newGame]);
    setNewGame({ name: "", picture: "" }); // Clear the input fields after adding the game
  };

  const deleteGame = (index) => {
    setGames(games.filter((_, i) => i !== index)); // Remove the game at the given index
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
        placeholder="Picture URL"
        value={newGame.picture}
        onChange={handlePictureURLChange}
        className="inputextend"
      />
      <button onClick={addGame} className="save-btn">
        ADD
      </button>
      <ul>
        {games.map((game, index) => (
          <li key={index} className="playerinfo">
            {game.name} <img src={game.picture} alt={game.name} />
            <button onClick={() => deleteGame(index)} className="edit-btn">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
