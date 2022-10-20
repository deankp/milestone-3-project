import "./SignUp.css";
import password_hide from "./Images/password-hide.png";
import password_show from "./Images/password-show.png";
import { useState, useEffect, useRef } from "react";

function SignUp() {
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

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
            <form autoComplete="off">
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
                    autoComplete="off"
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
                  />
                  <img
                    onClick={changeConfirmView}
                    src={confirmPasswordView ? password_hide : password_show}
                  />
                </div>
              </div>
              <div className="input">
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
              </div>
              <div className="submit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignUp;
