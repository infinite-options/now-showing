import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/StarAnimation.css';

function StarAnimation() {
    console.log("Inside StarAnnimation function")
    const navigate = useNavigate();

    const handleGetRecommendationsClick = () => {
        navigate('/firstRecommendation');
    };
    return(
        <div className="StarAnimation">
            <div className="top-bar-star-annimation">
                <MenuIcon className="hamburger-icon" /> 
                <span className="heading-label">My Rating</span>
                <NotificationsIcon className="bell-icon" style={{ cursor: 'pointer', fontSize: '24px' }} />
                {/* <SearchIcon className="bell-icon" style={{ cursor: 'pointer', fontSize: '24px' }} /> */}
            </div>

            <div className="search-bar-FirstScreen">
                <SearchIcon className="search-icon" />
                <input className="search-text" type="text" placeholder="Search Movie" />
            </div>

            
            <div className="container-staranimation">
                <h2 className="titleHeading">My Favorites</h2>
                <div className="favorites">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="favorite-item">
                            <input type="text" placeholder="Add movie title" className="movie-title-input" />
                            <input type="range" className="star-slider" />
                        </div>
                    ))}
                </div>
                <div className="bottom-buttons" >
                    <button className="get-recommendations" onClick={handleGetRecommendationsClick}>Get Recommendations</button>
                </div>

                <div className="bottom-buttons">
                    <button className="login-button">Login</button>    
                </div>
            </div>
            
            
        </div>
    );
    
}

export default StarAnimation;