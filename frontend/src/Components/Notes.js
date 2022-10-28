import React from "react";
// import Nav from "./Nav";
import Home from "./Home";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";

export default function Notes({ setIsLogin }) {
  return (
      <div className="notes-page">
        {/* <Nav setIsLogin={setIsLogin} /> */}
        <section>
<Home />
<CreateNote />
<EditNote />
        </section>
      </div>

  );
}
