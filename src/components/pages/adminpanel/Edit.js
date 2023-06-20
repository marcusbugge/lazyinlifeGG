import axios from "axios";
import React, { useState } from "react";

export default function Edit(props) {
  function postToDB(e, gamertag, role) {
    e.preventDefault();

    const user = {
      Id: props.index + 1,
      Gamertag: gamertag,
      Game: props.game,
      Role: role,
    };

    console.log(user);

    let url = "/api/player/change/" + user.Id;

    axios
      .put(url, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const handleInfoChange = (e) => {
    e.preventDefault();

    const gamertag = e.target.gamertag.value;
    const role = e.target.role.value;
    postToDB(e, gamertag, role);
  };

  return (
    <div>
      <div className="playerinfo-extend">
        <form onSubmit={handleInfoChange}>
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
          <button type="submit" className="save-btn">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}
