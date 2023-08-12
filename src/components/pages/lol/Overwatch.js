import React, { useEffect, useState } from "react";
import Game from "./Game";
import "aos/dist/aos.css";
import AOS from "aos";
import "./lol.css";
import axios from "axios";

export default function Overwatch() {
  const [players, setPlayers] = useState([]);

  console.log("kys");
  useEffect(() => {
    AOS.init();
    // Fetch players for League of Legends (replace URL and gameId as needed)
    axios
      .get(`http://localhost:8080/api/games/3/players`)
      .then((response) => {
        console.log("dataresponse", response.data);
        setPlayers(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Server responded with an error",
            error.response.status,
            error.response.data
          );
        } else {
          console.error("A network error occurred", error.message);
        }
      });
  }, []);

  return (
    <div className="content-lol" data-aos="fade-left">
      <Game
        gameTitle="Overwatch"
        journeyUrl="https://www.your-journey-url.com"
        backgroundImage={require("../../../assets/owbg.png")}
        leagues={[
          {
            name: "GOODGAME-LIGAEN",
            url: "https://www.gamer.no/turneringer/good-game-ligaen-league-of-legends-hosten-2023/11710/tabeller",
            teamName: "OUR ROSTER",
          },
        ]}
        twitchUrl="https://www.twitch.tv/lazyinlifetv"
        players={players}
      />
    </div>
  );
}
