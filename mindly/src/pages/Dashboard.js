import React from "react";
import "./Auth.css";

function Dashboard({ switchPage }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2> Dashboard</h2>
        <p>Welcome! You are logged in successfully.</p>
        <button className="auth-btn" onClick={() => switchPage("login")}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
