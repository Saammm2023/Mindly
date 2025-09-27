import React, { useState } from "react";
import Login from "./pages/login.js";
import Register from "./pages/Register.js";
import Dashboard from "./dashboard/Dashboard.js";
import Sidebar from "./dashboard/Sidebar.js";
import Navbar from "./dashboard/Navbar.js";
import "./App.css";

function App() {
  const [page, setPage] = useState(() => {
    return localStorage.getItem("page") || "login";
  });

  const switchPage = (newPage) => {
    setPage(newPage);
    localStorage.setItem("page", newPage);
  };

  return (
    <>
      {page === "login" && <Login switchPage={switchPage} />}
      {page === "register" && <Register switchPage={switchPage} />}
      {page === "dashboard" && (
  <div className="app-layout">
    <Sidebar
      activeSection="Dashboard"
      setActiveSection={() => {}}
    />
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Navbar onLogout={() => switchPage("login")} />
        <Dashboard />
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default App;
