import React, { useState } from 'react';

function Login ({ setState }) {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user, undefined, 2));
    };

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }));
    };

    return (
        <div className='Login'>
            Please enter your email as your Username:
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        value={user.email}
                        onChange={handleInputs} />
                </label>
                <br />
                <label>
                    <input
                        type='password'
                        placeholder='Enter Your Password'
                        name='password'
                        value={user.password}
                        onChange={handleInputs} />
                </label>
                <br />
                <button type='submit'>Login</button>
            </form>
            <br />
            <div onClick={setState}><label>Or Create an Account</label></div>
        </div>
    );
}

export default Login;