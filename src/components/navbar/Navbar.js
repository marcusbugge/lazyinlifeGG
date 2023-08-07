import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";

export default function Navbar() {
  // State to determine if we're scrolling or not
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Event handler to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="navcon">
        <div className="nav-content">
          <Link to="/">
            <div className="logo-cnt">
              <img src={logo} alt="logo"></img>
            </div>
          </Link>
          <div className="tag-style">
            <Link to="/">HOME</Link>
          </div>
          <div className="tag-style">
            <Link to="/about">ABOUT</Link>
          </div>
        </div>
        <div className="imgnav">
          <div className="tag-style">
            <img className="login-img" src={login} alt="login" />
          </div>
        </div>
      </div>
    </div>
  );
}
