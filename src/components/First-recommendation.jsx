import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
// import './css/Login.css'; 
import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/First-recommendation.css';
import poster from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/Poster.png';

function FirstRecommendation() {
    console.log("Inside firstRecommendation function")
    const navigate = useNavigate();

    const handleMoreRecommendationsClick = () => {
        navigate('/login');
    };
    return(
        <div className="FirstRecommendation">
            <div className="top-bar">
                <MenuIcon className="hamburger-icon" /> 
                <span className="heading-label">Binge List</span>
                <SearchIcon className="search-icon" style={{ cursor: 'pointer', fontSize: '24px' }} />            
            </div>
            <div className="container">
                <h2 className="titleHeading">Try These</h2>

        
                <div className="card-container">
                    <div className="card">
                        <img src={poster} alt="Poster" className="poster-image" />
                        <div className="card-text">Spiderman : No Way Home</div>
                    </div>
                    <div className="card">
                        <img src={poster} alt="Poster" className="poster-image" />
                        <div className="card-text">Card 2</div>
                    </div>
                </div>
                <button className="more-recommendations-button" onClick={handleMoreRecommendationsClick}>More Recommendations</button>
            </div>
            
            
        </div>
    );
    
}

export default FirstRecommendation;