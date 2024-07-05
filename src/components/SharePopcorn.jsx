import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
// import './css/Login.css'; 
import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/SharePopcorn.css';
import popcornImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/Frame 23375.png';
import popcornSmallImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/popcornSmall.png';
import popcornBigImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/popcornBig.png';
import popcornLargeImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/popcornLarge.png';
import { colors } from "@mui/material";
// import popcornImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/Frame 23375.png';
import thumbUpImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/thumb_up.png';
import thumbDownImg from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/images/thumb_down.png';

function SharePopcorn() {
    console.log("Inside Signup function")
    // const history = useHistory();
    const navigate = useNavigate();
    const handleFilterClick = () => {
        navigate('/profile');
    };
    const openSignupPage = () => {
        navigate('/signup')
    };
    return(
        <div className="SharePopcorn">
            <div className="top-bar-sharepopcorn">
            {/* <button onClick={handleFilterClick}>Filter</button> */}
                {/* <MenuIcon className="hamburger-icon" onClick={handleFilterClick}/> */}
                <span className="heading-label">SHARE</span>
                <span className="heading-label">POPCORN</span>
                {/* <SearchIcon className="search-icon" style={{ cursor: 'pointer', fontSize: '24px' }} /> */}
            </div>
            <div className="message-container">
                <p className="Thank-message">
                    Thanks for supporting our efforts!
                </p>
            </div>
            <div className="popcorns">
            <div className="popcorn-item">
                    <img src={popcornSmallImg} alt="Small Popcorn" className="popcorn-image" />
                    <span className="popcorn-price">$2</span>
                </div>
                <div className="popcorn-item">
                    <img src={popcornBigImg} alt="Big Popcorn" className="popcorn-image" />
                    <span className="popcorn-price">$5</span>
                </div>
                <div className="popcorn-item">
                    <img src={popcornLargeImg} alt="Large Popcorn" className="popcorn-image" />
                    <span className="popcorn-price">$10</span>
                </div>
            </div>
            <div className="bottom-buttons">
                <button className="donate-button">Donate</button>
            </div>
        </div>
    );
}

export default SharePopcorn;