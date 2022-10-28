import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { format } from "date-fns";
import "./CSS/index.css";
import App from "./App";

// import Notes from "./Components/Notes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        
      </Route>
    </Routes>
  </BrowserRouter>
);
