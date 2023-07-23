import { useState } from 'react';
import { Google, Instagram } from '@mui/icons-material';
import { Button, Grid, Stack, TextField } from '@mui/material';

function SignUp({ newState, setNewState }) {
    const [user, setUser] = useState({
        firstName: '',
        password1: '',
        password2: '',
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((values) => ({ ...values, [name]: value }));
    };

    const handleLoginState = () => {
        setNewState('LOGIN');
    };

    const handleSignUpState = () => {
        setNewState('SIGNUP');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(user, undefined, 2));
    };

    if (newState === 'SIGNUP') {
        return (
            <div className="SignUp">
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} justifyContent={'center'}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            type="text"
                            value={user.firstName}
                            onChange={handleInputs}
                            InputProps={{
                                style: {
                                    borderRadius: '100px',
                                    borderBlockColor: 'none',
                                },
                            }}
                        />
                        <TextField
                            id="password1"
                            name="password1"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={user.password1}
                            onChange={handleInputs}
                            InputProps={{
                                style: {
                                    borderRadius: '100px',
                                },
                            }}
                        />
                        <TextField
                            id="password2"
                            name="password2"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={user.password2}
                            onChange={handleInputs}
                            InputProps={{
                                style: {
                                    borderRadius: '100px',
                                    textDecoration: 'none',
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            className="SignUp-Button"
                            type="submit"
                        >
                            Sign up
                        </Button>
                        <Grid
                            container
                            justifyContent={'center'}
                            sx={{ color: '#8DAAC8' }}
                        >
                            <Grid item xs={4}>
                                <hr />
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: '16px',
                                }}
                            >
                                &nbsp; OR &nbsp;
                            </Grid>
                            <Grid item xs={4}>
                                <hr />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            type="submit"
                            className="login-btn"
                            startIcon={<Google />}
                        >
                            Login with Google
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            className="login-btn"
                            startIcon={<Instagram />}
                        >
                            Login with Instagram
                        </Button>

                        <span style={{ fontSize: '16px', paddingTop: '15px' }}>
                            Already have an account?
                        </span>
                        <Button onClick={handleLoginState}>Login</Button>
                    </Stack>
                </form>
            </div>
        );
    } else if (newState === 'LOGIN') {
        return (
            <div className="SignUp">
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3} justifyContent={'center'}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            type="text"
                            value={user.firstName}
                            onChange={handleInputs}
                            InputProps={{
                                style: {
                                    borderRadius: '100px',
                                    borderBlockColor: 'none',
                                },
                            }}
                        />
                        <TextField
                            id="password1"
                            name="password1"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={user.password1}
                            onChange={handleInputs}
                            InputProps={{
                                style: {
                                    borderRadius: '100px',
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            className="SignUp-Button"
                            type="submit"
                        >
                            Login
                        </Button>
                        <Grid
                            container
                            justifyContent={'center'}
                            sx={{ color: '#8DAAC8' }}
                        >
                            <Grid item xs={4}>
                                <hr />
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: '16px',
                                }}
                            >
                                &nbsp; OR &nbsp;
                            </Grid>
                            <Grid item xs={4}>
                                <hr />
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            type="submit"
                            className="login-btn"
                            startIcon={<Google />}
                        >
                            Login with Google
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            className="login-btn"
                            startIcon={<Instagram />}
                        >
                            Login with Instagram
                        </Button>

                        <span style={{ fontSize: '16px', paddingTop: '15px' }}>
                            Don't have an account?
                        </span>
                        <Button onClick={handleSignUpState}>
                            Create Account
                        </Button>
                    </Stack>
                </form>
            </div>
        );
    }
}

export default SignUp;
