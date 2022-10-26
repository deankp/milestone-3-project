import React from "react";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import upArrow from "../Images/up-arrow.png";
import Logout from "./Logout";

function Nav() {
  return (
    <nav className="nav">
      {/* <a id="top"></a> */}
      <a href="#top">
        <img alt="up arrow" src={upArrow} />
      </a>
      <h1 className="title">
        <Link className="title" to="/home">
          Soft<span>Notes</span>
        </Link>
      </h1>
      <p>
        <Logout />
      </p>
      {/* <p>Sort</p> */}
    </nav>
  );
}

export default Nav;
