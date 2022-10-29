import React, { useState } from "react";
import axios from "axios";
import "../CSS/Login.css";

export default function Login({ setIsLogin }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", {
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      localStorage.setItem("tokenStore", res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <section className="wrapper login">
        <h1 className="title">
          Soft<span>Notes</span>
        </h1>
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome!</h2>
              <p>
                Create your account.
                <br />
                For Free!
              </p>
              <a href="/signup" className="btn">
                Sign Up
              </a>
            </div>
          </div>
          <div className="col-right">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={loginSubmit}>
        <p>
                  <label>
                    Username/Email address<span>*</span>
                  </label>
                  
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />
</p>
<p>
                  <label>
                    Password<span>*</span>
                  </label>
                  <div id="password">
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />
          </div>
</p>
          <button type="submit">Login</button>
          <h3>{err}</h3>
        </form>
      </div>
      </div>
      </div>
    </section>
  );
}