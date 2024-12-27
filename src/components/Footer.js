import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <h1 > <span className='high'>*</span> MNSFTA AGENCY</h1>
        </div>

        {/* Address and Number */}
        <div className="footer-contact">
          <p>Murtaza kauka | Marketing Strategist ,</p>
          <p>Personal Branding Expert, Serial Entreprenur & Law Student</p>
          <p>Contact: +91 88494 93915</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <a href='https://www.instagram.com/mnfst.agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
            <img src='instagram.png' />
          </a>
       
         <a href='https://api.whatsapp.com/send?phone=918849493915&text=Murtaza%20can%20I%20know%20more%20about%20your%20services%20%3F'>
            <img src='whatsapp.png' />
          </a>
       
        </div>
      </div>

      <div className='tagline'>
        <p>© 2024 MNSFTA AGENCY – All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
