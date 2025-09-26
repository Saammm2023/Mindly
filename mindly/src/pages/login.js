import React, { useState } from "react";
import "./Auth.css";

function Login({ switchPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
    switchPage("dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder=" "
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label>Password</label>
          </div>
          <button type="submit" className="auth-btn" onClick={() => switchPage("dashboard")}>Login</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <button className="link-btn" onClick={() => switchPage("register")}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
