// import React from "react";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/MovieDetails.css';

function MovieDetails() {
    const location = useLocation();
    const { movie } = location.state;

    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/634649/credits?api_key=b8b76ccfa61c6e85ca7e096d905a7d63&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setCast(data.cast);
            })
            .catch(error => console.error('Error fetching cast data:', error));
    }, []);

    return (
        <div className="MovieDetails">
            <div className="MovieImage">
                <img src={`https://image.tmdb.org/t/p/w500${movie.belongs_to_collection.backdrop_path}`} alt="Poster" className="poster-image" />
            </div>
            <div className='detailsContainer'>
                
                <div className="movie-title-container">
                    <h1 className="movie-title">{movie.original_title}</h1>
                </div>
                <div className='genre-container'>
                    {/* <h3 className='smallHeadings'>Genres</h3> */}
                    {movie.genres.map(genre => (
                        <span key={genre.id} className="genre">{genre.name}</span>
                    ))}

                    {/* <div className="cast-cards">
                        {cast.map(member => (
                            <div className="cast-card" key={member.id}>
                                <div className='image-box'>
                                    <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} className="cast-image" />
                                </div>
                                <div className="cast-name">{member.name}</div>
                            </div>
                        ))}
                    </div>
                    <label htmlFor="">{movie.}</label> */}
                </div>
                <div className="movie-description-container">
                    <h3 className='smallHeadings'>Description</h3>
                    <p className="movie-description">{movie.overview}</p>
                </div>
                <div className="cast-container">
                    <h3 className="smallHeadings">Cast</h3>
                    <div className="cast-cards">
                        {cast.map(member => (
                            <div className="cast-card" key={member.id}>
                                <div className='image-box'>
                                    <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} className="cast-image" />
                                </div>
                                <div className="cast-name">{member.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MovieDetails;
