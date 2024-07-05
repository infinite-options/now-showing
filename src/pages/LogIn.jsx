import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

import menu from '../images/menu.png';
import welcome from '../images/welcome.png';
import magnifying from '../images/profile.png';

import up from '../images/thumb_up.png';
import down from '../images/thumb_down.png';
import popcorn from '../images/popcornImage.png';

const LogIn = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/');
  };

  const handlePopcornClick = () => {
    navigate('/sharePopcorn');
  };

  const handleNeedAccountClick = () => {
    navigate('/welcome');
  };

  return (
    <div className="logIn-container">
      <div className="logIn-header">
        <img src={menu} alt="menu" className="logIn-menu" onClick={handleMenuClick} />
        <img src={welcome} alt="welcome" className="logIn-welcome" />
        <img src={magnifying} alt="magnifying glass" className="logIn-magnifying" />
      </div>
      <div className="logIn-info">
        <input type="text" placeholder="Enter Username (email)" className="logIn-info-input logIn-username" />
        <input type="text" placeholder="Enter password" className="logIn-info-input logIn-name" />
      </div>
      <div className="logIn-segment">
        <p className="logIn-segment-text">Buy Popcorn and Support the Cause!</p>
        <img 
          src={popcorn} 
          alt="popcorn" 
          className="logIn-segment-image popcorn" 
          onClick={handlePopcornClick} 
        />
      </div>
      <div className="logIn-segment">
        <p className="logIn-segment-text">Want to keep up with the recommendations for your next movie night?</p>
        <img src={up} alt="up" className="logIn-segment-image logIn-up" />
        <img src={down} alt="down" className="logIn-segment-image logIn-down" />
      </div>
      <div className="logIn-info">
        <input type="text" placeholder="Enter phone number" className="logIn-info-input logIn-phone" />
        <p className="logIn-info-text">By providing your phone number, you agree to receive notifications.</p>
      </div>
      <div className="logIn-signup-section">
        <button className="logIn-signup-button">Login</button>
        <button className="rating-recommendations-button">Get Recommendations</button>
        <p className="logIn-signup-text" onClick={handleNeedAccountClick}>Need an account?</p>
      </div>
    </div>
  );
};

export default LogIn;
