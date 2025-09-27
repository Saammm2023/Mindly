import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ onLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-container">
      <FaUserCircle
        className="profile-icon"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item">My Profile</div>
          <div className="dropdown-item">Settings</div>
          <div className="dropdown-item" onClick={onLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
