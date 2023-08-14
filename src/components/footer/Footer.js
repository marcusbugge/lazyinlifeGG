import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import twitter from "../../assets/twitter.png";
import twitch from "../../assets/twitch.png";
import discord from "../../assets/discord.png";

const Footer = () => {
  const games = JSON.parse(localStorage.getItem("games")) || []; // Get games from localStorage

  return (
    <div className="footer-cnt">
      <div className="footer-content">
        <div className="staff-cnt">
          <h1>LAZY IN LIFE</h1>
          <div className="stripe-mini"></div>
          <div className="games">
            <Link to="/games/valorant">News</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="games-cnt">
          <h1>OUR TEAMS</h1>
          <div className="stripe-mini"></div>
          <div className="games">
            {games.map((game) => (
              <Link
                key={game.id}
                to={`/games/${game.name.toLowerCase().replace(/ /g, "-")}`}
              >
                {game.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="social-cnt">
        <div className="icons">
          <a href="https://twitter.com/">
            <img src={twitter} alt="twitter-logo" className="twitter" />
          </a>
          <a href="https://www.twitch.tv/">
            <img src={twitch} alt="twitch-logo" className="twitch" />
          </a>
          <a href="https://discord.com/invite/">
            <img src={discord} alt="discord-logo" className="discord" />
          </a>
        </div>
      </div>

      <div className="rights-cnt">
        <p>
          Lazy In Life &copy; 2023 All Rights Reserved - Created by{" "}
          <a href="https://github.com/marcusbugge">Bugge</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
