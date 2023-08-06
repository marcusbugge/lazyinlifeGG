import React, { useState, useEffect } from "react";
import "./homepage.css";
import pic1 from "../../assets/syhm.png"
import pic2 from "../../assets/tysker.png";
import pic3 from "../../assets/avarosa.png";
import pic4 from "../../assets/emil.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const [renderDetails, setRenderDetails] = useState(false);

  const toggleRenderDetails = () => {
    setRenderDetails(!renderDetails);
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/games");
        console.log(response.data);
        
        setGames(response.data);
        
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="homepage-cnt">
      <div className="home-top-cnt">
        <div className="home-header">
          <p className="over-h1">NORWEGIAN ESPORTS TEAM</p>

          <div className="teamname-cnt">
            <h1 className="under-h1">LAZY IN LIFE</h1>
          </div>
        </div>
      </div>

      <div className="explore-teams-cnt">
        {games.map((game) => (
          <Link to={`/games/${game.name.toLowerCase()}`} key={game.id}>
            <div className={`${game.picture.toLowerCase()}-cnt`}>
              <div className={`${game.picture.toLowerCase()}bg`}></div>
              <div className="game-content">
                <h1 className="testt">{game.name.toUpperCase()}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="compete-cnt">
        <p>DO YOU WANT TO JOIN US?</p>
        <h1>COMPETE WITH LIL</h1>

        <div className="apply-cnt">
          <div className="apply-btn">
            <p>APPLY NOW</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>

      <div className="pictures-cnt"></div>
    </div>
  );
}
