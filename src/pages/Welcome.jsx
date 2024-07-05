import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

import menu from '../images/menu.png';
import welcome from '../images/welcome.png';
import magnifying from '../images/profile.png';

import up from '../images/thumb_up.png';
import down from '../images/thumb_down.png';

const Welcome = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/');
  };

  const handleAlreadyHaveAccountClick = () => {
    navigate('/logIn');
  };

  return (
    <div className="welcome-container">
      <div className="header">
        <img src={menu} alt="menu" className="menu" onClick={handleMenuClick} />
        <img src={welcome} alt="welcome" className="welcome" />
        <img src={magnifying} alt="magnifying glass" className="magnifying" />
      </div>
      <div className="info">
        <input type="text" placeholder="Enter Username (email)" className="info-input username" />
        <input type="text" placeholder="Enter Stage name" className="info-input name" />
        <input type="text" placeholder="Enter password" className="info-input password" />
        <input type="text" placeholder="Re-enter password" className="info-input re-password" />
      </div>
      <div className="segment">
        <p className="segment-text">Want to keep up with the recommendations for your next movie night?</p>
        <img src={up} alt="up" className="segment-image up" />
        <img src={down} alt="down" className="segment-image down" />
      </div>
      <div className="info">
        <input type="text" placeholder="Enter phone number" className="info-input phone" />
        <p className="info-text">By providing your phone number, you agree to receive notifications.</p>
      </div>
      <div className="signup-section">
        <button className="signup-button">Sign Up</button>
        <button className="rating-recommendations-button">Get Recommendations</button>
        <p className="signup-text" onClick={handleAlreadyHaveAccountClick}>Already have an account?</p>
      </div>
    </div>
  );
};

export default Welcome;
