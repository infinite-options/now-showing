import { useState } from 'react';
import { Stack, TextField, Box } from '@mui/material';
import { ThumbDown, ThumbUp } from '@mui/icons-material';

function MyProfile () {

    const [user, setUser] = useState({
        firstName: 'Test',
        lastName: 'User',
        stageName: 'ToyUser12',
        email: 'test@example.com',
        password1: '',
        password2: '',
        phone: '408-476-1234',
        notification: 'yes'
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user, undefined, 2));
    };

    return (
        <div className='Profile'>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            variant="filled"
                            disabled
                            type='text'
                            value={user.firstName}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }} />

                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            variant="filled"
                            disabled
                            type='text'
                            value={user.lastName}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }} />
                    </Stack>
                    <Stack>
                        <TextField
                            id="stageName"
                            name="stageName"
                            label="Stage Name"
                            variant="filled"
                            disabled
                            type='text'
                            value={user.stageName}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }} />
                    </Stack>
                    <Stack>
                        <TextField
                            id="email"
                            name="email"
                            label="Email Address"
                            variant="filled"
                            disabled
                            type='email'
                            value={user.email}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }} />
                    </Stack>
                    <Stack>
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            variant="filled"
                            disabled
                            type='text'
                            value={user.phone}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }} />
                    </Stack>
                    <Stack spacing={2} sx={{ padding: '20px' }}>
                        <Box>
                            <img height={'80px'}
                                id='popcorn-img'
                                alt='Buy Me Popcorn'
                                src={require('../assets/img/ph_popcorn.png')}
                            />
                            <br />
                            <label htmlFor='popcorn-img'>Buy Me Popcorn</label>
                        </Box>
                        <Box>
                            <ThumbUp />
                            <ThumbDown />
                            <br />
                            <label>Notifications?</label>
                        </Box>
                    </Stack>
                    <Stack>
                        <TextField
                            id="password1"
                            name="password1"
                            label="Current Password"
                            variant="filled"
                            type='password'
                            value={user.password1}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }}
                            onChange={handleInputs} />
                    </Stack>
                    <Stack>
                        <TextField
                            id="password2"
                            name="password2"
                            label="New Password"
                            variant="filled"
                            type='password'
                            value={user.password2}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                    textDecoration: "none"
                                }
                            }}
                            onChange={handleInputs} />
                    </Stack>
                    <Stack>
                        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                            <button type='submit'>Change Password</button>
                            <button type='reset'>Logout</button>
                        </Stack>
                    </Stack>
                </Stack>
            </form>
        </div>
    );
}

export default MyProfile;