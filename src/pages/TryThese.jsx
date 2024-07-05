import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TryThese.css';  // Import corresponding CSS file

import menu from '../images/menu.png';
import binge from '../images/trythese.png';
import magnifying from '../images/profile.png';
import movieImage1 from '../images/Poster.png';  // Example image import

const TryThese = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/');
  };

  const handleMovieClick = () => {
    navigate('/movieDescription');
  };

  return (
    <div className="binge-list-container">
      <div className="binge-header">
        <img src={menu} alt="menu" className="binge-menu" onClick={handleMenuClick} />
        <img src={binge} alt="welcome" className="binge" />
        <img src={magnifying} alt="magnifying glass" className="binge-magnifying" />
      </div>
      {/* <div className="try-these-box">
        <p>Try These</p>
      </div> */}
      <div className="filter-buttons">
          <button className="filter-button">Action</button>
          <button className="filter-button">Comedy</button>
          <button className="filter-button">Fantasy</button>
          <button className="filter-button">Drama</button>
      </div>
      <div className="movies">
        {/* Create 10 movie boxes */}
        <div className="bmovie-box" onClick={handleMovieClick}>
          <img src={movieImage1} alt="Movie 1" className="bmovie-image" />
          <p className="bmovie-title">Spiderman: No Way Home</p>
          <p className="bmovie-rating">6.4/10 IMDb</p>
        </div>
        <div className="bmovie-box" onClick={handleMovieClick}>
          <img src={movieImage1} alt="Movie 2" className="bmovie-image" />
          <p className="bmovie-title">Movie Title 2</p>
          <p className="bmovie-rating">10/10 IMDb</p>
        </div>
        <div className="bmovie-box" onClick={handleMovieClick}>
          <img src={movieImage1} alt="Movie 3" className="bmovie-image" />
          <p className="bmovie-title">Movie Title 3</p>
          <p className="bmovie-rating">10/10 IMDb</p>
        </div>
        <div className="bmovie-box" onClick={handleMovieClick}>
          <img src={movieImage1} alt="Movie 4" className="bmovie-image" />
          <p className="bmovie-title">Movie Title 4</p>
          <p className="bmovie-rating">10/10 IMDb</p>
        </div>
        {/* Repeat for other movie boxes */}
      </div>
      <div className="rec-button">
        <button className="recommendations-button">More Recommendations</button>
      </div>
    </div>
  );
};

export default TryThese;
