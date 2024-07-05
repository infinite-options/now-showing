import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageSwitch.css';

const PageSwitch = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="nav-buttons">
      <div className='all-buttons'>
        <button className="nav-button" onClick={() => handleButtonClick('/NowShowing')}>Now Showing</button>
        <button className="nav-button" onClick={() => handleButtonClick('/ratings')}>Ratings</button>
        <button className="nav-button" onClick={() => handleButtonClick('/TryThese')}>Try These</button>
        <button className="nav-button" onClick={() => handleButtonClick('/movieDescription')}>Movie Description</button>
        
        <button className="nav-button" onClick={() => handleButtonClick('/welcome')}>Sign Up</button>
        <button className="nav-button" onClick={() => handleButtonClick('/logIn')}>Log In</button>
        
        <button className="nav-button" onClick={() => handleButtonClick('/sharePopcorn')}>Donate</button>
        
      </div>
    </div>
  );
};

export default PageSwitch;
