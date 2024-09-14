import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/main.mp4" type="video/mp4" />
      </video>

      <nav className="navbar">
        <div className="navbar-item-head">Hos*</div>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>

        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <div className="menu-2">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Services</li>
            <li className="navbar-item">Portfolio</li>
            <li className="navbar-item">Clients</li>
            <li className="navbar-item">TCU</li>
            <li className="navbar-item">About Us</li>
            <li className="navbar-item">Contact</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
