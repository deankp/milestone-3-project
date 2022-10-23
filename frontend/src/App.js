import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Notes from "./Components/Notes";
import Home from "./Components/Home";
import IsLogin from "./Components/IsLogin"

function App() {

  return (
    <div className="App">
      <Home />
    <IsLogin />
    </div>
  );
}

export default App;
