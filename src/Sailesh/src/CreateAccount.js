import React from "react";
import "./head.css";

const CreateAccount  = () => {
    return(
    <div className="cover">
        <div className="head">
        <div>Create <br/> Account</div>
        </div>
        <br/>
        <input className="body" type="text"  placeholder="Enter Username"/>
        <br/>
        <input className="body" type="password" placeholder="Enter Password" />
        <br/>
        <input className="body" type="password" placeholder="Re-enter Password" />
        <br/>
        <button className="Signup">Signup</button>
        <div className="middle">
        <div className="vector"></div>
        <p className="text">OR</p>
        <div className="vector"></div>
        </div>
        <button className="google">Login with Google</button>
        <br/>
        <button className="instagram">Login with Instagram</button>
        <p className="last">Already have an account?</p>
        <button className="last2">LOGIN </button>
      </div>
    
    )
}

export default CreateAccount

