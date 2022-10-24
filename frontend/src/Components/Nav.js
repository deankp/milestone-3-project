import React from "react";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import upArrow from "../Images/up-arrow.png";
import Logout from "./Logout";

function Nav() {
  return (
    <header>
      <div>
        <nav>
          <a href="#top">
            <img src={upArrow} />
          </a>
          <h1 className="title">
            <Link to="/home">
              Soft<span>Notes</span>
            </Link>
          </h1>
          <p>
            <Logout />
          </p>
          {/* <p>Sort</p> */}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
