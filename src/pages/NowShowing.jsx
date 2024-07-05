import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NowShowing.css'; // Import the corresponding CSS file

import menu from '../images/menu.png';
import myrating from '../images/Now-Showing.png';
import notif from '../images/profile.png';
import magnifying from '../images/magnifying.png';

const NowShowing = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/');
  };

  const handleRecommendationsClick = () => {
    navigate('/TryThese');
  };

  const handleLoginClick = () => {
    navigate('/logIn');
  };

  return (
    <div className="my-ratings-container">
      <div className="rating-header">
        <img src={menu} alt="menu" className="rating-menu" onClick={handleMenuClick} />
        <img src={myrating} alt="my rating" className="myrating" />
        <img src={notif} alt="notifications" className="rating-notif" />
      </div>
      <div className="filter">
        <input
          type="text"
          placeholder="Search Movie"
          className="search-input"
          style={{ backgroundImage: `url(${magnifying})` }}
        />
        {/* <div className="filter-buttons">
          <button className="filter-button">Action</button>
          <button className="filter-button">Comedy</button>
          <button className="filter-button">Fantasy</button>
          <button className="filter-button">Drama</button>
        </div> */}
      </div>
      <div className="favorites">
        <p className="favorites-text">My Favorites</p>
        <div className="favorite-boxes">
          <div className="favorite-input-container">
            <input type="text" className="favorite-input" placeholder="Add movie title" />
            <input type="range" className="favorite-slider" />
          </div>
          <div className="favorite-input-container">
            <input type="text" className="favorite-input" placeholder="Add movie title" />
            <input type="range" className="favorite-slider" />
          </div>
          <div className="favorite-input-container">
            <input type="text" className="favorite-input" placeholder="Add movie title" />
            <input type="range" className="favorite-slider" />
          </div>
          <div className="favorite-input-container">
            <input type="text" className="favorite-input" placeholder="Add movie title" />
            <input type="range" className="favorite-slider" />
          </div>
          <div className="favorite-input-container">
            <input type="text" className="favorite-input" placeholder="Add movie title" />
            <input type="range" className="favorite-slider" />
          </div>
        </div>
      </div>
      <div>
        <div className="rating-rec-button">
          <button
            className="rating-recommendations-button"
            onClick={handleRecommendationsClick}
          >
            Get Recommendations
          </button>
        </div>
        <div className="rating-signup-section">
          <button
            className="rating-signup-button"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowShowing;
