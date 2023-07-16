import { useState } from 'react';

function CreateAccount () {

    const [user, setUser] = useState({
        fullName: '',
        stageName: '',
        email: '',
        password1: '',
        password2: '',
        phone: '',
        notification: 'yes'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password1 !== user.password2) {
            alert('Passwords do not Match!!');
        } else {
            alert(JSON.stringify(user, undefined, 2));
        }
    };

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }));
    };

    return (
        <div className='Create-Account'>
            <form className='Create-Form' onSubmit={handleSubmit}>
                <label>
                    So we know how to address you: <br />
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Your Full Name'
                        value={user.fullName}
                        onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    What name would you like to use when you share lists: <br />
                    <input
                        type='text'
                        name='stageName'
                        placeholder='Your Stage Name'
                        value={user.stageName}
                        onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Please enter your email as your Username: <br />
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        value={user.email}
                        onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Please enter and confirm your password: <br />
                    <input
                        type='password'
                        name='password1'
                        placeholder='Your Password'
                        value={user.password1}
                        onChange={handleInputs} />
                    <br />
                    <input
                        type='password'
                        name='password2'
                        placeholder='Confirm Password'
                        value={user.password2}
                        onChange={handleInputs} />
                </label>
                <br />
                <br />
                <label>
                    Would you like to receive Notifications like new movies you might
                    like or recommendation lists you might enjoy? &nbsp;
                    <select
                        name='notification'
                        value={user.notification}
                        onChange={handleInputs}>
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option>
                    </select>
                </label>
                <br />
                <br />
                <label>
                    So we can text you: <br />
                    <input
                        type='text'
                        name='phone'
                        placeholder='Your Phone Number'
                        value={user.phone}
                        onChange={handleInputs} />
                </label>
                <br />
                <br />
                <button type='submit'>Complete Sign Up</button>
            </form>
        </div>
    );
}

export default CreateAccount;