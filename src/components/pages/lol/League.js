import React, { useEffect, useState } from "react";
import Game from "./Game";
import "aos/dist/aos.css";
import AOS from "aos";
import "./lol.css";
import axios from "axios";

export default function League() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    AOS.init();
    // Fetch players for League of Legends (replace URL and gameId as needed)
    axios
      .get(`http://localhost:8080/api/games/1/players`)
      .then((response) => {
        console.log("responseleague", response.data);
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching players:", error);
      });
  }, []);

  return (
    <div className="content-lol" data-aos="fade-left">
      <Game
        gameTitle="League of Legends"
        journeyUrl="https://www.your-journey-url.com"
        backgroundImage={require("../../../assets/Rectangle.png")}
        leagues={[
          {
            name: "GOODGAME-LIGAEN",
            url: "https://www.gamer.no/turneringer/good-game-ligaen-league-of-legends-hosten-2023/11710/tabeller",
            teamName: "OUR ROSTER",
          },
          {
            name: "NLC",
            url: "https://www.nlc.gg/",
            teamName: "OUR ROSTER",
          },
        ]}
        twitchUrl="https://www.twitch.tv/lazyinlifetv"
        players={players}
      />
    </div>
  );
}
