import React from 'react'
import lol from "../../assets/lol.png";
import valo from "../../assets/valo.png";
import ow from "../../assets/ow.png";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <div>
          {" "}
          <img src={lol} alt="" />
        </div>
        <div>
          <img src={valo} alt="" />
        </div>
        <div>
          {" "}
          <img src={ow} alt="" />
        </div>
      </div>
    </div>
  );
}
