import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
// import './css/Login.css'; 
import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/First-recommendation.css';
import poster from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/Poster.png';

function FirstRecommendation() {
    console.log("Inside firstRecommendation function")
    const navigate = useNavigate();
    const location = useLocation();
    // const { movie } = location.state;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://api.themoviedb.org/3/movie/634649?api_key=b8b76ccfa61c6e85ca7e096d905a7d63')
            .then(response => response.json())
            .then(data => {
                // Set the fetched data to the movies state
                setMovies([data]);  // For this example, we only fetch one movie
            })
            .catch(error => console.error('Error fetching data:', error));
            console.log("movies>>",movies)
    }, []);

    
    const handleCardClick = (movie) => {
        navigate('/movieDetails', { state: { movie } });
        // navigate('/movieDetails');
    };

    const handleMoreRecommendationsClick = () => {
        navigate('/signup');
    };
    return(
        <div className="FirstRecommendation">
            <div className="top-bar-First-Rec">
                <MenuIcon className="hamburger-icon" /> 
                <span className="heading-label">Binge List</span>
                <SearchIcon className="search-icon" style={{ cursor: 'pointer', fontSize: '24px' }} />            
            </div>
            <div className="first-rec-container">
            <div className="button-row">
                <button>Action</button>
                <button>Comedy</button>
                <button>Fantasy</button>
                <button>Drama</button>
            </div>
                {/* <h2 className="titleHeading">Try These</h2> */}

        
                <div className="rec-card-container">
                    {movies.map(movie => (
                        <div className="rec-card" key={movie.id} onClick={() => handleCardClick(movie)}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Poster" className="poster-image" />
                            <div className="card-text">{movie.original_title}</div>
                            <div className="card-details">
                                <span className="duration">{movie.runtime} mins</span>
                                <span className="rating">{movie.vote_average}</span>
                            </div>
                        </div>
                    ))}
                    {/* <div className="card">
                        <img src={poster} alt="Poster" className="poster-image" />
                        <div className="card-text">Spiderman : No Way Home</div>
                    </div>
                    
                    <div className="card">
                        <img src={poster} alt="Poster" className="poster-image" />
                        <div className="card-text">Card 2</div>
                    </div> */}
                </div>
                <div className="more-recommendations-button-container">
                    <button className="more-recommendations-button" onClick={handleMoreRecommendationsClick}>More Recommendations</button>
                </div>
                
            </div>
            
            
        </div>
    );
    
}

export default FirstRecommendation;