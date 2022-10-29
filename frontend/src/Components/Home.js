import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/Home.css";


export default function Home() {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get("/api/notes", {
      headers: { Authorization: token },
    });
    setNotes(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  const deleteNote = async (id) => {
    try {
      if (token) {
        await axios.delete(`/api/notes/${id}`, {
          headers: { Authorization: token },
        });
        getNotes(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  return (
    <div className="homeWrapper">
      <div className="homeContainer home">
      {notes.map((note) => (
        <div className="note" key={note._id}>
          <h2 title={note.title}>{note.title}</h2>
          <div className="text">
            <p>{note.content}</p>
          </div>
          <p className="date">deadline </p>
          <div className="card-footer">
            <Link to={`edit/${note._id}`}>
              
            </Link>
          </div>
          <button className="delete" onClick={() => deleteNote(note._id)}>
          
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}