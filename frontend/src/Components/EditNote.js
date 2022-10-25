import "../CSS/CreateNote.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditNote(props) {
  const params = useParams();
  const [note, setNote] = useState({
    title: "",
    content: "",
    // date: "",
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
        const { title, content, id } = note;
        const editNote = {
          title,
          content,
        };

        await axios.put(`/api/notes/${id}`, editNote, {
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
          onClick={(props) => {
            props.setCreateNote(false);
          }}
        >
          X
        </p>
        <h2>Edit your note</h2>
        <form onSubmit={editNote}>
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
            <input type="submit" value="Edit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
