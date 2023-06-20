import React, { useEffect, useState } from "react";
import Edit from "./Edit";

export default function Gamelist(props) {
  const [loaded, setLoaded] = useState(false);
  const [players, setPlayers] = useState([]);
  const [valplayers, setValplayers] = useState([]);

  useEffect(() => {
    load();

    async function load() {
      loadData("lol");
      loadData("valorant");

      setLoaded(true);
    }
  });

  function loadData(game) {
    const response = fetch("/api/player/getplayersbygame?game=" + game);
    const data = response.json();

    console.log(data);
    if (game === "lol") {
      setPlayers(data);
    }
    if (game === "valorant") {
      setValplayers(data);
    }
  }

  const [show, setShow] = useState(-1);

  const extendCards = (index) => {
    setShow(index);
  };

  const hideCards = () => {
    setShow(-1);
  };

  return <div className="player-cnt"></div>;
}
