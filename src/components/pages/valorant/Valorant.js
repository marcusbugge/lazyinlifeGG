import React, { Component, useEffect, useState } from "react";
import Header from "./Header";
import "./valorant.css";
import Players from "./Players";
import Login from "../login/Login";

export default function League() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getAllPlayers();

    async function getAllPlayers() {
      const response = await fetch(
        "/api/player/getplayersbygame?game=valorant"
      );
      const data = await response.json();

      console.log(data);
      setPlayers(data);
    }
  }, []);

  return (
    <div className="content-lol">
      <Header />

      <Login />
    </div>
  );
}
