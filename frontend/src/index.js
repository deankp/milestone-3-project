import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { format } from "date-fns";
import "./CSS/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import CreateNote from "./Components/CreateNote";
import EditNote from "./Components/EditNote";
// import Notes from "./Components/Notes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" component={Home} exact />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/edit/:id" element={<EditNote />} />
      {/* <Route path="/notes" element={<Notes />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
