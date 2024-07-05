import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ratings.css'; // Import the corresponding CSS file

import menu from '../images/menu.png';
import myrating from '../images/My-Ratings.png';
import notif from '../images/profile.png';
import magnifying from '../images/magnifying.png';

const Ratings = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/logIn');
  };

  return (
    <div className="ratings-my-ratings-container">
      <div className="ratings-rating-header">
        <img src={menu} alt="menu" className="ratings-rating-menu" onClick={handleMenuClick} />
        <img src={myrating} alt="my rating" className="ratings-myrating" />
        <img src={notif} alt="notifications" className="ratings-rating-notif" />
      </div>
      <div className="ratings-filter">
        <input
          type="text"
          placeholder="Search Movie"
          className="ratings-search-input"
          style={{ backgroundImage: `url(${magnifying})` }}
        />
        <div className="filter-buttons">
          <button className="filter-button">Action</button>
          <button className="filter-button">Comedy</button>
          <button className="filter-button">Fantasy</button>
          <button className="filter-button">Drama</button>
        </div>
      </div>
      <div className="ratings-favorites">
        <p className="ratings-favorites-text">Add Ratings</p>
        <div className="ratings-favorite-boxes">
          <div className="ratings-favorite-input-container">
            <input type="text" className="ratings-favorite-input" placeholder="Add movie title" />
            <input type="range" className="ratings-favorite-slider" />
          </div>
          <div className="ratings-save-rec-button">
            <button className="ratings-rating-recommendations-button">Save Rating</button>
          </div>
        </div>
      </div>
      <div className="ratings-favorites">
        <p className="ratings-favorites-text">My Favorites</p>
        <div className="ratings-favorite-boxes">
          <div className="ratings-favorite-input-container">
            <input type="text" className="ratings-favorite-input" placeholder="Add movie title" />
            <input type="range" className="ratings-favorite-slider" />
          </div>
          <div className="ratings-favorite-input-container">
            <input type="text" className="ratings-favorite-input" placeholder="Add movie title" />
            <input type="range" className="ratings-favorite-slider" />
          </div>
          <div className="ratings-favorite-input-container">
            <input type="text" className="ratings-favorite-input" placeholder="Add movie title" />
            <input type="range" className="ratings-favorite-slider" />
          </div>
          <div className="ratings-favorite-input-container">
            <input type="text" className="ratings-favorite-input" placeholder="Add movie title" />
            <input type="range" className="ratings-favorite-slider" />
          </div>
          <div className="ratings-favorite-input-container">
            <input type="text" className="ratings-favorite-input" placeholder="Add movie title" />
            <input type="range" className="ratings-favorite-slider" />
          </div>
        </div>
      </div>
      <div>
        <div className="ratings-rating-rec-button">
          <button className="ratings-rating-recommendations-button">Get Recommendations</button>
        </div>
        <div className="ratings-rating-signup-section">
          <button className="ratings-rating-signup-button" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
