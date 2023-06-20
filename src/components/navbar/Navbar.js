import { render } from "@testing-library/react";
import { React, Component, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import twitch from "../../assets/twitch.png";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";

export default function Navbar() {
  

  return (
    <div className="navbar">
      <div className="navcon">
        <div className="nav-content">
          <Link to="/">
            <div className="logo-cnt">
              <img src={logo} alt="logo"></img>
            </div>
          </Link>
          <Link to="/games/league-of-legends">Teams</Link>

          <Link to="/about">About</Link>
        </div>
        <div className="imgnav">
          <img className="login-img" src={login} alt="loign" />
        </div>
      </div>
    </div>
  );
}
