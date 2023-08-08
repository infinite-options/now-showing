import React from "react";
import "../head.css";
import { useNavigate } from "react-router-dom";

const Popcorn = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/MyProfile2");
  };

  const handleFavoritesClick = () => {
    navigate("/");
  };

  const handleRatingsClick = () => {
    navigate("/pages/MyRatings");
  };

  return (
    <div className="cover">
      <div className="head">
        <div>
          Share <br /> Popcorn
        </div>
      </div>
      <div className="Iconlist">
        <div className="star" onClick={handleRatingsClick}></div>
        <br />
        <div className="favourite" onClick={handleFavoritesClick}></div>
        <br />
        <input className="body" type="text" placeholder="Get Recommendation" />
        <br />
        <div className="vectoricon" onClick={handleProfileClick}></div>
        <br />
        <div className="popcorn"></div>
      </div>
      <p className="First">Share some popcorn with us!</p>
      <div className="popicon">
        <div className="popicon1">
          <button className="popimage1"></button>
          <p className="Firstcorn1">$2</p>
        </div>
        <div className="popicon1">
          <button className="popimage2"></button>
          <p className="Firstcorn2">$5</p>
        </div>
        <div className="popicon1">
          <button className="popimage3"></button>
          <p className="Firstcorn3">$10</p>
        </div>
      </div>
      <div className="other">
        <p className="Second">
          Other
          <button className="otherbox"></button>
        </p>
      </div>
      <div className="Thanks">Thank you for supporting our efforts!</div>
      <button className="donate">Donate</button>
    </div>
  );
};

export default Popcorn;
