import axios from "axios";
import React, { useState } from "react";

export default function Edit(props) {
  function postToDB(e, data) {
    e.preventDefault();

    let url = `http://localhost:8080/api/games/${data.gamename}/players/${props.player.id}`;

    axios
      .put(url, data)
      .then((res) => {
        console.log(res);
        props.close();
      })
      .catch((err) => console.log(err));
  }
  const handleInfoChange = (e) => {
    e.preventDefault();

    if (props.isGame) {
      // Handle game update logic here
    } else {
      const data = {
        id: props.player.id,
        name: e.target.name.value,
        fullname: e.target.fullname.value,
        age: e.target.age.value,
        country: e.target.country.value,
        role: e.target.role.value,
        league: e.target.league.value,
        twitter: e.target.twitter.value,
        gamename: e.target.gamename.value,
      };

      console.log("user", data);

      postToDB(e, data);
    }
  };

  return (
    <div className="playerinfo-extend">
      {/* Add this line */}
      <div className="playerediter">
        <form onSubmit={handleInfoChange}>
          <div className="form-content-edit">
            <button className="close-btn" onClick={props.close}>
              X
            </button>{" "}
            <h1>EDIT {props.player.name.toUpperCase()}</h1>
            <div className="edit-inputs-cnt">
              <div>
                <p>GAMERTAG</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={props.player.name}
                />
              </div>
              <div>
                <p>FULL NAME</p>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  defaultValue={props.player.fullname}
                />
              </div>
              <div>
                <p>AGE</p>
                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  defaultValue={props.player.age}
                />
              </div>
              <div>
                <p>COUNTRY</p>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  defaultValue={props.player.country}
                />
              </div>
              <div>
                <p>ROLE</p>
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  defaultValue={props.player.role}
                />
              </div>
              <div>
                <p>LEAGUE</p>
                <input
                  type="text"
                  name="league"
                  placeholder="League"
                  defaultValue={props.player.league}
                />
              </div>
              <div>
                <p>TWITTER</p>
                <input
                  type="text"
                  name="twitter"
                  placeholder="Twitter"
                  defaultValue={props.player.twitter}
                />
              </div>
              <div>
                <p>GAME NAME</p>
                <input
                  type="text"
                  name="gamename"
                  placeholder="Game Name"
                  defaultValue={props.player.gamename}
                />
              </div>
              <button className="save-btn-player" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
