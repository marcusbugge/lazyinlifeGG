import React, { useState, useEffect } from "react";
import "./homepage.css";
import pic1 from "../../assets/syhm.png";
import pic2 from "../../assets/tysker.png";
import pic3 from "../../assets/avarosa.png";
import avarosa from "../../assets/avarosafront.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { setGames } from "../../redux/game/gameSlice"; // Import the setGames action

function useTypingEffect(text, typingSpeed) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, text, typingSpeed]);

  return displayedText;
}

export default function Home() {
  const [renderDetails, setRenderDetails] = useState(false);

  const headerText = "EMBRACE VICTORY WITH LAZY IN LIFE";
  const typingSpeed = 80; // Speed of typing in milliseconds
  const displayedHeaderText = useTypingEffect(headerText, typingSpeed);

  const toggleRenderDetails = () => {
    setRenderDetails(!renderDetails);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch();
  const games = useSelector((state) => state.games); // Access games from Redux store

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/games");
        console.log(response.data);

        dispatch(setGames(response.data)); // Dispatch the setGames action to update the Redux store

        // Store the games in localStorage
        localStorage.setItem("games", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchGames();
  }, [dispatch]);

  return (
    <div className="homepage-cnt">
      <div className="home-top-cnt">
        <svg
          viewBox="0 0 1318 752"
          class="w-[82.375rem] flex-none"
          aria-hidden="true"
        >
          <path
            fill="url(#ee394704-5802-4a27-9451-3d29bf7415a3)"
            fill-opacity=".25"
            d="m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z"
          ></path>
          <defs>
            <linearGradient
              id="ee394704-5802-4a27-9451-3d29bf7415a3"
              x1="1452.56"
              x2="-101.59"
              y1="515.446"
              y2="760.592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9DD556"></stop>
              <stop offset="1" stop-color="#05668d"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="home-header">
          <div className="box-header">
            <div className="header-text-cnt">
              <h1 className="home-h1">
                {displayedHeaderText}
                <span>.</span>
              </h1>

              <p>
                Welcome to Lazy in Life, a team of dedicated and skilled gamers
                united by passion. Explore our journey, achievements, and
                upcoming challenges. Join us as we strive for excellence in
                esports, turning raw talent into championship victories. Your
                adventure in the competitive gaming world starts here!
              </p>
            </div>

            <img src={avarosa} alt="avarosa" />
          </div>
        </div>
      </div>

      <div className="games-header">
        <h1>
          OUR GAMES<span>.</span>
        </h1>
      </div>

      <div className="explore-teams-cnt">
        {games.map((game) => (
          <Link
            to={`/games/${game.name.toLowerCase().replace(/ /g, "-")}`}
            key={game.id}
          >
            <div className={`${game.backgroundUrl}-cnt`}>
              <div className={`${game.backgroundUrl}bg`}></div>
              <div className="game-content">
                <h1 className="testt">{game.name.toUpperCase()}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="compete-cnt">
        <p className="over-h1" data-aos="fade-left">
          DO YOU WANT TO JOIN US?
        </p>
        <h1 data-aos="fade-left">COMPETE WITH LIL</h1>

        <div className="apply-cnt">
          <button className="apply-btn">
            <p>APPLY NOW</p>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <div className="pictures-cnt"></div>
    </div>
  );
}
