import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar-container">
      <div className="image-container">
        <img src="mainp.png" className="background-photo" alt="Background" />
        {/* Overlay text for both desktop and mobile */}
        <div className="overlay-text">
        Millions of views zero ad spend <br/> organic growth done right.
        </div>
      </div>

      <nav className="navbar">
        <div className="Nav-tag">
          <h1>
            <span className="high">*</span> MNSFTA AGENCY
          </h1>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>

        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          
          <li className="navbar-item">SERVICES</li>
        
          <li className="navbar-item">ABOUT US</li>
          <li className="navbar-item">BOOK A CALL</li> 
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
