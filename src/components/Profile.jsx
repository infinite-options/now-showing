import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
// import './css/Login.css'; 
import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/Profile.css';
import { colors } from "@mui/material";

function Profile() {
    console.log("Inside Profile function")
    // const history = useHistory();
    const navigate = useNavigate();
    const handleFilterClick = () => {
        navigate('/');
    };
    return(
        <div className="Profile">
            <div className="top-bar-Profile">
            {/* <button onClick={handleFilterClick}>Filter</button> */}
                <MenuIcon className="hamburger-icon" />
                <div className="profile-picture-container">
                    <img src="path/to/your/profile-picture.jpg" alt="Profile" className="profile-picture" />
                </div>
                <EditIcon className="edit-icon" style={{ cursor: 'pointer', fontSize: '24px' }} />
            </div>
            <div className="container-profile">
                <input className="text-box-class" type="text" placeholder="First-Last Name" />
                <input className="text-box-class" type="text" placeholder="Stage Name" />
                <input className="text-box-class" type="email" placeholder="Update Your Email" />
                <input className="text-box-class" type="tel" placeholder="Update Your Phone Number" />
                <input className="text-box-class" type="text" placeholder="Select Genres" />
                <input className="text-box-class" type="password" placeholder="Change Password" />
                {/* <div className="favorites">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="favorite-item">
                            <input type="text" placeholder="Add movie title" className="movie-title-input" />
                            <input type="range" className="star-slider" />
                        </div>
                    ))}
                </div> */}
                <div className="bottom-buttons-profile" >
                    <button className="get-recommendations-profile" >Save Changes</button>
                </div>

                <div className="bottom-buttons-profile">
                    <button className="login-button-profile">Login</button>    
                </div>
            </div>
        </div>
    );
}


export default Profile;