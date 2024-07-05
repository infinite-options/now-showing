import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MovieDescription.css';  // Import corresponding CSS file
import movieImage from '../images/movieImage.png';  // Import your movie image
import backArrowImage from '../images/back.png';  // Import your back arrow image
import bookmarkImage from '../images/bookmark.png';  // Import bookmark image
import starImage from '../images/star.png';  // Import star image

const MovieDescription = () => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState(null);

  const handleBackArrowClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/634649?api_key=b8b76ccfa61c6e85ca7e096d905a7d63');
        // console.log('Movie Details:', response.data);
        setMovieDetails(response.data);
      } catch (error) {
        // console.error('Error fetching movie details:', error);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/634649/credits?api_key=b8b76ccfa61c6e85ca7e096d905a7d63&language=en-US');
        // console.log('Credits:', response.data);
        setCredits(response.data);
      } catch (error) {
        // console.error('Error fetching credits:', error);
      }
    };

    fetchMovieDetails();
    fetchCredits();
  }, []);

  return (
    <div className="movie-description-container">
      <div className="movie-image-container">
        <img src={movieImage} alt="Movie Poster" className="movie-image" />
        <img
          src={backArrowImage}
          alt="Back Arrow"
          className="back-arrow"
          onClick={handleBackArrowClick}
        />
      </div>
      <div className="general-info">
        <div className="movie-title">
          {movieDetails && (
            <>
              {movieDetails.title}
              <img src={bookmarkImage} alt="Bookmark" className="bookmark" />
            </>
          )}
        </div>
        <div className="rating">
          <img src={starImage} alt="Star" className="star" />
          <span className="rating-text">{movieDetails ? `${movieDetails.vote_average}/10 IMDb` : 'Loading...'}</span>
        </div>
      </div>
      <div className="addition-info">
        <div className="button-categories">
          <button className="filter-button">ACTION</button>
          <button className="filter-button">ADVENTURE</button>
          <button className="filter-button">FANTASY</button>
        </div>
        <div className="stats">
          <div className="stats-row">
            <div className="stats-label">Length</div>
            <div>{movieDetails ? `${movieDetails.runtime}min` : 'Loading...'}</div>
          </div>
          <div className="stats-row">
            <div className="stats-label">Language</div>
            <div>{movieDetails ? movieDetails.original_language : 'Loading...'}</div>
          </div>
          <div className="stats-row">
            <div className="stats-label">Rating</div>
            <div>{movieDetails ? movieDetails.adult ? 'PG-13' : 'PG' : 'Loading...'}</div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="description-title">Description</div>
        <p className="description-text">
          {movieDetails ? movieDetails.overview : 'Loading...'}
        </p>
      </div>
      <div className="cast">
        <div className="cast-title">Cast</div>
        {credits && (
          <div className="cast-grid">
            {credits.cast.slice(0, 12).map((actor) => (
              <div className="cast-member" key={actor.cast_id}>
                <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} className="cast-image" />
                <div className="cast-name">{actor.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDescription;
