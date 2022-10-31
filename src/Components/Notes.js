import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import Home from "./Home";
import "../CSS/Animation.css";

export default function Notes({ setIsLogin }) {
  const [colorTheme, setColorTheme] = useState("LightMode");
  return (
    <div className="notes-page">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Nav
        setIsLogin={setIsLogin}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
      <section>
        <Home colorTheme={colorTheme} />
      </section>
    </div>
  );
}
