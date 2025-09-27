import React from 'react';
import './Sidebar.css';
import { FaHome, FaBook, FaBullseye, FaUsers, FaMedal } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Solo Study", icon: <FaBook /> },
    { name: "Study Goals", icon: <FaBullseye /> },
    { name: "Study Stats", icon: <FaUsers /> },
    { name: "Leaderboard", icon: <FaMedal /> },
  ];

  return (
    <div className="sidebar">
      {sections.map((section) => (
        <div
          key={section.name}
          className={`sidebar-item ${activeSection === section.name ? 'active' : ''}`}
          onClick={() => setActiveSection(section.name)}
        >
          <div className="icon-wrapper">{section.icon}</div>
          <span className="name">{section.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
