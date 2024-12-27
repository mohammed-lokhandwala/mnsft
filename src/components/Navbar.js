import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar-container">
     <img src="mainphoto.jpg" className="background-photo"></img>

      <nav className="navbar">
      <div className="Nav-tag">
          <h1 > <span className='high'>*</span> MNSFTA AGENCY</h1>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>

        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Portfolio</li>
          <li className="navbar-item">Clients</li>
          <li className="navbar-item">TCU</li>
          <li className="navbar-item">About Us</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
