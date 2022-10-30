import "../CSS/SignUp.css";
import { useState } from "react";
import axios from "axios";
import "../CSS/Animation.css";

function SignUp(props) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/register", {
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

  return (
    <div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="wrapper login">
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
                      name="name"
                      id="register-name"
                      placeholder="Username"
                      required
                      value={user.name}
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
                      name="email"
                      id="register-email"
                      placeholder="Email"
                      required
                      value={user.email}
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
                      type="password"
                      name="password"
                      id="register-password"
                      placeholder="Password"
                      required
                      value={user.password}
                      autoComplete="true"
                      onChange={onChangeInput}
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
                      type="password"
                      name="password"
                      id="register-password"
                      placeholder="Password"
                      required
                      value={user.password}
                      autoComplete="true"
                      onChange={onChangeInput}
                    />
                  </div>
                  <p className="input">
                    Have an account?<a href="/">Login Now</a>
                  </p>
                </div>
                <div className="submit">
                  <input type="submit" value="Submit" />
                </div>
                <h3>{err}</h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
