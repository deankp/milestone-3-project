import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Logout() {
  const logOut = () => {
    localStorage.clear();
    axios
      .get("http://localhost:3001/user/logout", { withCredentials: true })
      .then(
        (window.location.href = "/login"),
        console.log("I logged Out").catch((error) => {
          console.log(error);
        })
      );
  };
  return (
    <p onClick={logOut}>
      <Link>Logout</Link>
    </p>
  );
}

export default Logout;
