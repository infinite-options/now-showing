import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
// import './css/Login.css'; 
import 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/css/Login.css';
import { colors } from "@mui/material";

function Login() {
    console.log("Inside Login function")
    // const history = useHistory();
    const navigate = useNavigate();
    const handleFilterClick = () => {
        navigate('/');
    };
    return(
        <div className="Login">
            <div className="top-bar">
            {/* <button onClick={handleFilterClick}>Filter</button> */}
                <MenuIcon className="hamburger-icon" />
                <span className="heading-label">Welcome</span>
                <SearchIcon className="search-icon" style={{ cursor: 'pointer', fontSize: '24px' }} />
            </div>
            <div className="container">
                <div>
                    <input className="text-box-class" type="text" placeholder="Enter Username(email)"/>
                </div>
                <div>
                    <input className="text-box-class" type="text" placeholder="Enter Stage Name"/>
                </div>
                <div>
                    <input className="text-box-class" type="password" placeholder="Enter Password"/>
                </div>
                <div>
                    <input className="text-box-class" type="password" placeholder="Re-enter Password" />
                </div>
                <div className="recommendation-text">
                    Want to keep up with the recommendations for your next movie night?
                </div>
                <div>
                    <input className="text-box-class" type="tel" placeholder="Enter Phonenumber" />
                </div>
                <p style={{color:"white"}}>By providing your phone number your agreeing  to receive notifications. </p>
            </div>
            <div>
                <button className="signup-box-class">Signup</button>
            </div>  
            <div className="create-account">
                Already Have An Acount?
                <button className="login-label">LOGIN</button>
            </div>
            
        </div>
    );
    
}

export default Login;