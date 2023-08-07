import React from "react";
import "./lol.css";

export class Header extends React.Component {
  render() {
    const gameNameParts = this.props.gameTitle.split(" ");
    const firstLine = gameNameParts.slice(0, 2).join(" ");
    const secondLine = gameNameParts.slice(2).join(" ");

    return (
      <div className="head">
        <div
          className="leaguebanner"
          style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
        >
          <p>LAZY IN LIFE</p>
          <h1>{firstLine.toUpperCase()}</h1>
          <h1>{secondLine.toUpperCase()}</h1>
          <button className="btn-trans">
            <p>Follow our journey -</p>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
