import React from "react";
import Nav from "./Nav";
import Home from "./Home";

export default function Notes({ setIsLogin }) {
  return (
      <div className="notes-page">
        <Nav setIsLogin={setIsLogin} />
        <section>
          <Home />
        </section>
      </div>

  );
}
