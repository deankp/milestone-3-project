import "../CSS/Home.css";
import CreateNote from "./CreateNote";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Edit from "../Images/edit.png";
import Delete from "../Images/delete.png";
// import { format } from "date-fns";
import axios from "axios";

function Home() {
  const [createNote, setCreateNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");

  const getNotes = async (token) => {
    const res = await axios.get("api/notes", {
      headers: { Authorization: token },
    });
    console.log(res);
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
    console.log(id);
    try {
      if (token) {
        await axios.delete(`api/notes/${id}`, {
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
        {createNote === false && (
          <a href="#top">
            <div
              className="add"
              onClick={() => {
                setCreateNote(true);
              }}
            >
              <h2>+</h2>
            </div>
          </a>
        )}
        <Nav />
        {/* <nav>
          <a href="#top">
            <img src={upArrow} />
          </a>
          <h1 className="title">
            Soft<span>Notes</span>
          </h1>
          <p>Sort</p>
        </nav> */}
        {createNote && <CreateNote setCreateNote={setCreateNote} />}
        <div className="searchBar">
          <input type="text" placeholder="search..." />
        </div>
        <div className="notesContainer">
          {notes.map((note) => (
            <div className="note" key={note._id}>
              <h2 title={notes.title}>{notes.title}</h2>
              {/* <p className="catagory">Catagory</p> */}
              <div className="text">
                <h3>{notes.content}</h3>
              </div>
              <p className="date">{notes.date}</p>
              <div className="note-footer">
                <p>
                  {notes.name}
                  <Link to={`edit/${note.id}`}>Edit</Link>
                </p>
              </div>
              <button className="close" onClick={() => deleteNote(note._id)}>
                X
              </button>
            </div>
          ))}

          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title" title={notes.title}>
              Title
            </h2>
            <p className="catagory">Catagory</p>
            <div className="text">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h3>
            </div>
            {/* <div className="note-footer">
              <p>
                <Link to="/edit/:id">Edit</Link>
              </p>
              <p className="date">Date</p>
            </div> */}
            {/* <button className="close">x</button> */}
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis. Id semper risus in hendrerit gravida rutrum quisque non
              tellus. Integer feugiat scelerisque varius morbi enim nunc
              faucibus. Semper quis lectus nulla at volutpat diam ut venenatis
              tellus. Orci dapibus ultrices in iaculis nunc sed augue lacus
              viverra.
            </h3>
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">
              Cursus mattis molestie a iaculis at erat pellentesque adipiscing
              commodo. Dolor sit amet consectetur adipiscing.
            </h3>
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">
              Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit
              sed. Pretium viverra suspendisse potenti nullam ac tortor vitae
              purus faucibus. Augue eget arcu dictum varius. Aenean euismod
              elementum nisi quis eleifend quam. Mauris pellentesque pulvinar
              pellentesque habitant morbi tristique senectus et netus. Nec
              ultrices dui sapien eget mi proin sed. Eu tincidunt tortor aliquam
              nulla facilisi cras fermentum. Magna fringilla urna porttitor
              rhoncus dolor. Et netus et malesuada fames ac turpis egestas sed
              tempus.
            </h3>
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">
              Nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
            </h3>
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">Ut consequat</h3>
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">Tempor orci eu lobortis</h3>
          </div>
          <div className="note">
            <div className="delete">
              <img src={Delete} alt="Delete Button" />
            </div>
            <div className="edit">
              <Link to="/edit/:id">
                <img src={Edit} />
              </Link>
            </div>
            <p className="date">Date</p>
            <h2 className="title">Title</h2>
            <p className="catagory">Catagory</p>
            <h3 className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
              lobortis. Id semper risus in hendrerit gravida rutrum quisque non
              tellus. Integer feugiat scelerisque varius morbi enim nunc
              faucibus. Semper quis lectus nulla at volutpat diam ut venenatis
              tellus. Orci dapibus ultrices in iaculis nunc sed augue lacus
              viverra.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
