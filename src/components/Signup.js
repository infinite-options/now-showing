import React from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';

function Signup ({ state, setState }) {

    const handleLogin = () => {
        setState('LOGIN');
    };

    const handleSignup = () => {
        setState('SIGNUP');
    };

    if (state === 'MAIN') {
        return (
            <div className='Signup'>
                <button onClick={handleLogin}>Login</button>
                <br />
                <button onClick={handleSignup}>Sign Up for Free!</button>
                <br />
                <SignupText />
            </div>
        );
    } else if (state === 'LOGIN') {
        return <Login setState={handleSignup} />;
    } else if (state === 'SIGNUP') {
        return <CreateAccount />;
    } else if (state === 'RECOMMEND') {
        return (
            <div className='Signup'>
                <button>Sign Up for Free!</button>
                <br />
                <SignupText />
            </div>
        );
    }
}

function SignupText () {
    return (
        <ul className='Signup-List'>
            <span className='Signup-List-Title'>Why Sign Up?</span>
            <li>&nbsp; Save your Lists</li>
            <li>&nbsp; Save your Movie Ratings</li>
            <li>&nbsp; Find Movies by Genre, Actor or Style</li>
            <li>&nbsp; Share Lists with Friends</li>
        </ul>
    );
}

export default Signup;