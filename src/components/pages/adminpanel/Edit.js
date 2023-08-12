import axios from "axios";
import React, { useState } from "react";

export default function Edit(props) {
  function postToDB(e, data) {
    e.preventDefault();

    let url = "http://localhost:8080/api/games/1/players/1";

    axios
      .put(url, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const handleInfoChange = (e) => {
    e.preventDefault();

    if (props.isGame) {
      // Handle game update logic here
    } else {
      const gamertag = e.target.gamertag.value;
      const role = e.target.role.value;
      postToDB(e, {
        id: props.playerId, // Assuming players have an ID
        name: gamertag,
        twitter: role,
      });
    }
  };

  return (
    <div>
      <div className="playerinfo-extend">
        <form onSubmit={handleInfoChange}>
          {props.isGame ? (
            <>
              <input
                name="name"
                type="text"
                placeholder="Game Name"
                className="inputextend"
              ></input>
              <input
                name="pictureURL"
                type="text"
                placeholder="Picture URL"
                className="inputextend"
              ></input>
            </>
          ) : (
            <>
              <input
                name="role"
                type="text"
                placeholder="Role"
                className="inputextend"
              ></input>
              <input
                name="gamertag"
                type="text"
                placeholder="Gamertag"
                className="inputextend"
              ></input>
            </>
          )}
          <button type="submit" className="save-btn">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}
