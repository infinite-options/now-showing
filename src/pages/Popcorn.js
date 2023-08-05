import React from "react";
import "../head.css";

const Popcorn = () => {
  return (
    <div className="cover">
      <div className="head">
        <div>
          Share <br /> Popcorn
        </div>
      </div>
      <div className="Iconlist">
        <div className="star"></div>
        <br />
        <div className="favourite"></div>
        <br />
        <input className="body" type="text" placeholder="Get Recommendation" />
        <br />
        <div className="vectoricon"></div>
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
