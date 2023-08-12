import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import val from "../../assets/valo.png";
import lol from "../../assets/lol.png";
import ow from "../../assets/ow.png";
import axios from "axios";
import { setGames } from "../../redux/game/gameSlice";

export default function Sidenav() {
  const location = useLocation();
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/games");
        dispatch(setGames(response.data)); // Dispatch the setGames action to update the Redux store
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchGames();
  }, [dispatch]);

  // Rest of the code...

  // Mapping between game names and images
  const gameImages = {
    valorant: val,
    "league-of-legends": lol,
    overwatch: ow,
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidenav">
      <div className="sidenav-content">
        {games.map((game) => {
          const gameNameSlug = game.name.toLowerCase().replace(/ /g, "-");
          return (
            <Link to={`/games/${gameNameSlug}`}>
              <div
                key={game.name}
                className={isActive(`/games/${gameNameSlug}`) ? "active" : ""}
              >
                <img src={gameImages[gameNameSlug]} alt={game.name} />
                {/* Using local image from mapping */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
