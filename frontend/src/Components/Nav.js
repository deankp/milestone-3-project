import React from "react";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import upArrow from "../Images/up-arrow.png";
import downArrow from "../Images/down-arrow.png";
import Logout from "./Logout";
import Github from "../Images/github.PNG";
function Nav() {
  return (
    <nav className="nav">
      {/* <a id="top"></a> */}
      <a href="#top">
        <img alt="button to top" src={upArrow} />
      </a>
      <a href="#bottom">
        <img alt="button to bottom" src={downArrow} />
      </a>
      <h1 className="title">
        <Link className="title" to="/home">
          Soft<span>Notes</span>
        </Link>
      </h1>
      <a href="https://github.com/cladden77/milestone-3-project">
        <img src={Github} alt="link to Github" />
      </a>
      <p>
        <Logout />
      </p>
      {/* <p>Sort</p> */}
    </nav>
  );
}

export default Nav;
