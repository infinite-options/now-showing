import React from "react";
import "./head.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleMyRating = () => {
    navigate("/pages/Recommendations");
  };

  return (
    <div className="cover">
      <div className="head">
        <div>LOGIN</div>
      </div>
      <br />
      <input className="body2" type="text" placeholder="Enter Username" />
      <br />
      <input className="body2" type="password" placeholder="Enter Password" />
      <br />
      <button className="Signup2" onClick={handleMyRating}>
        Login
      </button>
      <div className="middle2">
        <div className="vector"></div>
        <p className="text">OR</p>
        <div className="vector"></div>
      </div>
      <button className="google2">Login with Google</button>
      <br />
      <button className="instagram2">Login with Instagram</button>
      <br />
      <br />
      <p className="last3">Don’t have an account?</p>
      <button className="last2">CREATE ACCOUNT</button>
    </div>
  );
};

export default Login;
