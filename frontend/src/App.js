import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Notes from "./Components/Notes";
import Home from "./Components/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const verified = await axios.get("/users/verify", {
          headers: { Authorization: token },
        });
        console.log(verified);
        setIsLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <div className="App">
      {isLogin ? <Notes /> : <Login setIsLogin={setIsLogin} />}
      {/* <Login /> */}
      <SignUp />
      <Home />
    </div>
  );
}

export default App;
