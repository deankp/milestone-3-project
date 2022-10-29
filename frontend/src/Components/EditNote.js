import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditNote({ match }) {
  const params = useParams();
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
    id: "",
  });
  const history = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("tokenStore");
      if (params.id) {
        const res = await axios.get(`/api/notes/${params.id}`, {
          headers: { Authorization: token },
        });
        console.log(params.id);
        console.log(res);
        setNote({
          title: res.data.title,
          content: res.data.title,
          id: res.data._id,
        });
      }
    };
    getNote();
  }, [params.id]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, date, id } = note;
        const newNote = {
          title,
          content,
          date,
        };

        await axios.put(`/api/notes/${id}`, newNote, {
          headers: { Authorization: token },
        });

        return history.push("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  return (
    <div className="create-note">
      <h2>Edit Note</h2>
      <form onSubmit={editNote} autoComplete="off">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={note.title}
            id="title"
            name="title"
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Take A Note...</label>
          <textarea
            type="text"
            value={note.content}
            id="content"
            name="content"
            required
            rows="2"
            onChange={onChangeInput}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}