import "../CSS/CreateNote.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    // date: "",
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
        const { title, content } = note;
        const newNote = {
          title,
          content,
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

  const [active, setActive] = useState("pickOne");

  return (
    <div className="createNote">
      <div className={`createContainer ${active}`}>
        <p
          className="exit"
          onClick={() => {
            props.setCreateNote(false);
          }}
        >
          X
        </p>
        <h2>Create your note</h2>
        <form onSubmit={createNote}>
          <input
            type="text"
            defaultValue={note.title}
            placeholder="Enter your title..."
            required
            onChange={onChangeInput}
          />
          <textarea
            defaultValue={note.content}
            placeholder="Enter note text..."
            required
            onChange={onChangeInput}
          />
          <div className="bottom">
            <div className="colors">
              {/* Color */}
              <div
                className={`color pickOne ${
                  active === "pickOne" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickOne");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickTwo ${
                  active === "pickTwo" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickTwo");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickThree ${
                  active === "pickThree" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickThree");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickFour ${
                  active === "pickFour" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickFour");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickFive ${
                  active === "pickFive" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickFive");
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

export default CreateNote;
