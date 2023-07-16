import { useState } from 'react';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
function MyProfile () {

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
        <div className='Profile'>
            <div>My Ratings</div>
            <div className='Profile-User'>
                <label>First Last Name</label><br />
                <label>Stage Name</label><br />
                <label>test@example.com</label><br />
                <label>408-476-1234</label><br />
            </div>
            <br />
            <div>
                <img
                    src={require('../assets/img/popcorn-tub-sm.png')}
                    alt='Popcorn Tub' /> &nbsp;
                Buy Me Popcorn
            </div>
            <br />
            <div className='Profile-Notif'>
                Notifications
                &nbsp;
                <span >
                    <button>
                        <ThumbUp />
                    </button>
                    &nbsp;
                    <button>
                        <ThumbDown />
                    </button>
                </span>
            </div>
            <div>
                <br />
                <form onSubmit={handleSubmit}>
                    <label>
                        Please enter and confirm your password: <br />
                        <br />
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
                    <button type='submit'>Change Password</button>
                </form>
            </div>
        </div>
    );
}

export default MyProfile;