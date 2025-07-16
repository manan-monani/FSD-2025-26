import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav>
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#services" onClick={toggleSidebar}>Services</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </nav>
    </div>
  );
}

export default Sidebar;
