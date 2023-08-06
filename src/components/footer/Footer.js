import React, { Component } from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import twitch from "../../assets/twitch.png";
import { Link } from "react-router-dom";
import isOnline from "../../App";
import axios from "axios";

export class Footer extends Component {
  render() {
    async function logout() {
      let url = "/api/user/logout";
      axios
        .post(url)
        .then((res) => {
          console.log(res);
          localStorage.clear();
          window.location.reload(false);
        })
        .catch((err) => console.log(err));
    }
    return (
      <div className="footer-cnt">
        <div className="footer-content">
          <div className="staff-cnt">
            <h1>LAZY IN LIFE</h1>
            <div className="stripe-mini"></div>

            <div className="games">
              <Link to="/games/valorant">News</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/games/csgo">Staff</Link>
              {localStorage.getItem("isAuthenticated") ? (
                <Link to="/" onClick={logout}>
                  {" "}
                  Logout
                </Link>
              ) : (
        ""
              )}
            </div>
          </div>
          <div className="games-cnt">
            <h1>OUR TEAMS</h1>
            <div className="stripe-mini"></div>

            <div className="games">
              <Link to="/games/valorant">Valorant</Link>
              <Link to="/games/league-of-legends">League of Legends</Link>
              <Link to="/games/teamfight-tactics">Overwatch</Link>
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
          <p>Lazy In Life &copy; 2023 All Rights Reserved</p>
        </div>
        
      </div>
    );
  }
}

export default Footer;
