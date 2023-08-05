import React from "react";
import "./head.css";

const MyProfile2 = () => {
  return (
    <div className="cover">
      <div className="head" id="">
        <div>
          Create <br /> Account
        </div>
      </div>
      <div className="totalprofile">
        <div className="name">
          <input className="Firstname" placeholder="First Name" />
          <input className="Firstname" placeholder="Last Name" />
        </div>
        <input className="Stagename" placeholder="Stage Name" />
        <input className="Stagename" placeholder="Email Address" />
        <input className="Stagename" placeholder="Phone Number" />
        <div className="notification">
          <div className="popicon2">
            <div className="popimagenew"></div>
            <button className="First2">Buy Me a Popcorn</button>
          </div>
          <div className="notification2">
            <div className="row">
              <div className="thumbsup"></div>
              <div className="thumbsdown"></div>
            </div>
            <button className="First3">Notification?</button>
          </div>
        </div>
        <input
          className="CurrentPassword"
          type="password"
          placeholder="Current Password"
        />
        <input
          className="CurrentPassword"
          type="password"
          placeholder="New Password"
        />
        <div className="row">
          <button className="Changepassword">Change Password</button>
          <button className="Logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile2;
