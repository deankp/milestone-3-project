import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Notes from "./Components/Notes";
import Home from "./Components/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      {isLogin ? <Notes /> : <Login />}
      {/* <Login />  */}
      <SignUp />
      <Home />
    </div>
  );
}

export default App;
