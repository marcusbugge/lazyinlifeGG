import React, { useState } from "react";
import Login from "./Login";
import axios from "axios";
import { createBrowserHistory } from "history";
import isOnline from "../../App";
import { BrowserRouter, Link } from "react-router-dom";
import Loginconfirmation from "./Loginconfirmation";

export const history = createBrowserHistory();

export default function LoginForm() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [user, setUser] = useState();
  let username;
  let password;

  const [render, setRender] = useState(true);

  const headers = { "header-name": "value" };
  const config = { headers };

  async function handleLogin(e) {
    e.preventDefault();
    username = e.target.email.value;
    password = e.target.password.value;

    const user = {
      Username: username,
      Password: password,
    };

    axios
      .post("/api/user/login", user, config)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setUser(response.data);
        localStorage.setItem("isAuthenticated", response.data);

        setRender(true);

        window.location.reload(true);
      })
      .catch((e) => console.log("something went wrong :(", e));
  }

  return (
    <div className="loginform">
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        {localStorage.getItem("isAuthenticated") ? <Loginconfirmation /> : ""}
        <div className="label-cnt">
          <label>
            <p>Username</p>
            <input className="input" name="email" type="text" />
          </label>
          <label>
            <p>Password</p>
            <input className="input" name="password" type="password" />
          </label>
        </div>

        <div className="buttons">
          <button type="submit">
            <p>Login</p>
          </button>
        </div>
      </form>
    </div>
  );
}
