import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Delete from "../Images/delete.png";
import "../CSS/CreateNote.css";

export default function CreateNote(props) {
  const [activeColor, setActiveColor] = useState("colorOne");
  const [activeCatagory, setActiveCatagory] = useState("other");
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, date } = note;
        const newNote = {
          title,
          content,
          date,
        };

        await axios.post("/api/notes", newNote, {
          headers: { Authorization: token },
        });

        return history.push("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  return (
    <div className="createNote">
      <div className={`createContainer ${activeColor}`}>
        <p
          className="exit"
          onClick={() => {
            props.setCreateNote(false);
          }}
        >
          <img src={Delete} alt="Delete button" />
        </p>
        <h2>Create your note</h2>
        <form onSubmit={createNote} autoComplete="off">
          <p>Catagory</p>
          <div className="catagories">
            <div
              className={`catagory ${
                activeCatagory === "personal" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCatagory("personal");
              }}
            >
              Personal
            </div>
            <div
              className={`catagory ${
                activeCatagory === "work" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCatagory("work");
              }}
            >
              Work
            </div>
            <div
              className={`catagory ${
                activeCatagory === "home" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCatagory("home");
              }}
            >
              Home
            </div>
            <div
              className={`catagory ${
                activeCatagory === "goal" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCatagory("goal");
              }}
            >
              Goal
            </div>
            <div
              className={`catagory ${
                activeCatagory === "reminder" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCatagory("reminder");
              }}
            >
              Reminder
            </div>
            <div
              className={`catagory ${
                activeCatagory === "other" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCatagory("other");
              }}
            >
              Other
            </div>
          </div>

          <input
            type="text"
            value={note.title}
            id="title"
            name="title"
            required
            onChange={onChangeInput}
            placeholder="Enter your title..."
          />
          <textarea
            type="text"
            value={note.content}
            id="content"
            name="content"
            required
            rows="2"
            placeholder="Enter note text..."
            onChange={onChangeInput}
          />

          <div className="bottom">
            <div className="colors">
              {/* Color */}
              <div
                className={`color colorOne ${
                  activeColor === "colorOne" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorOne");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorTwo ${
                  activeColor === "colorTwo" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorTwo");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorThree ${
                  activeColor === "colorThree" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorThree");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorFour ${
                  activeColor === "colorFour" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorFour");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorFive ${
                  activeColor === "colorFive" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorFive");
                }}
              ></div>
              <div
                className={`color colorSix ${
                  activeColor === "colorSix" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorSix");
                }}
              ></div>
            </div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}
