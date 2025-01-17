import React from 'react';
import './New.css';

const New = () => {
  return (
    <div className="new">
      <h3>MNSFTA AGENCY</h3>
      <video className="kauka-video1" autoPlay loop muted>
      <source src="trim.mp4"  type="video/mp4" />

      </video>
      <div className="stats1">
        <p>81% <br /> Improved time management</p>
        <p>70% <br /> More increased performance</p>
      </div>
      <div className="stats2">
      If you're ready to level up your brand, whether through organic growth,
personal branding, or persuasive video ads, MNFST Agency is your go-to
partner. We’re here to help you cut through the noise, reach your audience,
and convert followers into customers.
      </div>
      <div className="m-container">
        <a href="https://api.whatsapp.com/send?phone=918849493915&text=Murtaza%20can%20I%20know%20more%20about%20your%20services%20%3F">
          <button className="m-text">Book A Call</button>
        </a>
      </div>
    </div>
  );
};

export default New;
