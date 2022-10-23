import "../CSS/SignUp.css";
import password_hide from "../Images/password-hide.png";
import password_show from "../Images/password-show.png";
import { useState, useEffect } from "react";
import axios from "../api/Axios";

function SignUp() {
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/user/register", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const changeView = () => {
    setPasswordView(!passwordView);
  };
  const changeConfirmView = () => {
    setConfirmPasswordView(!confirmPasswordView);
  };

  useEffect(() => {}, [passwordView]);

  return (
    <body>
      <div className="SignUpWrapper SignUp">
        <div className="SignUpContainer">
          <div className="SignUp-form">
            <h1>Sign Up!</h1>
            <form onSubmit={registerSubmit}>
              <div className="input">
                <p>
                  <label>
                    Username<span>*</span>
                  </label>
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    required
                    defaultValue={user.name}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="input">
                <p>
                  <label>Email</label>
                </p>
                <div>
                  <input
                    type="email"
                    placeholder="Email Adress"
                    autoComplete="off"
                    defaultValue={user.email}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="input">
                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                </p>
                <div id="password">
                  <input
                    type={passwordView ? "text" : "password"}
                    placeholder="Password"
                    required
                    defaultValue={user.password}
                    autoComplete="off"
                    onChange={onChangeInput}
                  />
                  <img
                    onClick={changeView}
                    src={passwordView ? password_hide : password_show}
                  />
                </div>
              </div>
              <div className="input">
                <p>
                  <label>
                    Confirm Password<span>*</span>
                  </label>
                </p>
                <div id="password">
                  <input
                    type={confirmPasswordView ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="off"
                    required
                    defaultValue={user.password}
                    onChange={onChangeInput}
                  />
                  <img
                    onClick={changeConfirmView}
                    src={confirmPasswordView ? password_hide : password_show}
                  />
                </div>
              </div>
              {/* <div className="input">
                <p>
                  <label>
                    Birthdate<span>*</span>
                  </label>
                </p>
                <div>
                  <p>
                    <input type="date" autoComplete="off" required />
                  </p>
                </div>
              </div> */}
              <div className="submit">
                <input type="submit" value="Submit" />
              </div>
              <h3>{err}</h3>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignUp;
