import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
