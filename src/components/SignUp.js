import { useState } from 'react';
import { ErrorOutline, Google, Instagram } from '@mui/icons-material';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Stack,
    TextField,
} from '@mui/material';
import axios from 'axios';

function SignUp({ newState, setNewState }) {
    const [user, setUser] = useState({
        email: 'test@gmail.com',
        password1: '1234',
        password2: '1234',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [errorTitle, setErrorTitle] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((values) => ({ ...values, [name]: value }));
    };

    const toggleSpinner = (value) => {
        if (value) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    };

    const handleLoginState = () => {
        setNewState('LOGIN');
    };

    const handleSignUpState = () => {
        setNewState('SIGNUP');
    };

    const handleClose = () => {
        setOpen(false);
        if (errorTitle === 'User Creation Failed') {
            setNewState('LOGIN');
        } else if (errorMessage === 'User Error') {
            setNewState('SIGNUP');
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        // alert(JSON.stringify(user, undefined, 2));
        if (
            user.email === '' ||
            user.password1 === '' ||
            user.password2 === ''
        ) {
            setErrorTitle('Error!');
            setErrorMessage('Please fill out all fields');
            setOpen(true);
            return;
        } else if (user.password1 !== user.password2) {
            setErrorTitle('Error!');
            setErrorMessage('Passwords must match!');
            setOpen(true);
            return;
        } else if (user.password1 === user.password2) {
            setErrorMessage('');
            setOpen(false);
        }

        const formUser = {
            email: user.email,
            password: user.password1,
            role: '',
            first_name: '',
            last_name: '',
            phone_number: '',
        };

        toggleSpinner(true);

        await axios
            .post(
                'https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/CreateAccount/FINDME',
                // 'http://127.0.0.1:2000/api/v2/CreateAccount/FINDME',
                formUser
            )
            .then((response) => {
                console.log(response);
                toggleSpinner(false);
                if (response.data.message === 'User already exists') {
                    setErrorTitle('User Creation Failed');
                    const msg =
                        'The user ' +
                        user.email +
                        ' already exists! Please Log In!';
                    setErrorMessage(msg);
                    setOpen(true);
                    return;
                } else {
                    setErrorTitle('Success!');
                    setErrorMessage('User Created!');
                    setOpen(true);
                    return;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        // alert(JSON.stringify(user, undefined, 2));

        if (user.email === '' || user.password1 === '') {
            setErrorTitle('Error!');
            setErrorMessage('Please fill out all fields');
            setOpen(true);
            return;
        }

        toggleSpinner(true);

        const formUser = {
            email: user.email,
        };

        await axios
            .post(
                'https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/AccountSalt/FINDME',
                // 'http://127.0.0.1:2000/api/v2/AccountSalt/FINDME',
                formUser
            )
            .then((res) => {
                let saltObject = res;
                if (saltObject.data.code === 200) {
                    let hashAlg = saltObject.data.result[0].password_algorithm;
                    let salt = saltObject.data.result[0].password_salt;

                    if (hashAlg != null && salt != null) {
                        // Make sure the data exists
                        if (hashAlg !== '' && salt !== '') {
                            // Rename hash algorithm so client can understand
                            switch (hashAlg) {
                                case 'SHA256':
                                    hashAlg = 'SHA-256';
                                    break;
                                default:
                                    break;
                            }
                            // Salt plain text password
                            let saltedPassword = user.password1 + salt;
                            // Encode salted password to prepare for hashing
                            const encoder = new TextEncoder();
                            const data = encoder.encode(saltedPassword);
                            //Hash salted password
                            crypto.subtle.digest(hashAlg, data).then((res) => {
                                let hash = res;
                                // Decode hash with hex digest
                                let hashArray = Array.from(
                                    new Uint8Array(hash)
                                );
                                let hashedPassword = hashArray
                                    .map((byte) => {
                                        return byte
                                            .toString(16)
                                            .padStart(2, '0');
                                    })
                                    .join('');
                                console.log(hashedPassword);
                                let loginObject = {
                                    email: user.email,
                                    password: hashedPassword,
                                };
                                console.log(JSON.stringify(loginObject));
                                axios
                                    .post(
                                        'https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/Login/FINDME',
                                        // 'http://127.0.0.1:2000/api/v2/Login/FINDME',
                                        loginObject
                                    )
                                    .then((response) => {
                                        let resMsg = response.data.message;
                                        console.log(resMsg);
                                        if (resMsg === 'Incorrect password') {
                                            toggleSpinner(false);
                                            setErrorTitle('Incorrect Password');
                                            setErrorMessage(resMsg);
                                            setOpen(true);
                                        } else if (
                                            resMsg === "Email doesn't exist"
                                        ) {
                                            toggleSpinner(false);
                                            setErrorTitle('User Error');
                                            const msg =
                                                'The user ' +
                                                user.email +
                                                " doesn't exist! Please Signup!";
                                            setErrorMessage(msg);
                                            setOpen(true);
                                            return;
                                        } else if (
                                            resMsg === 'Login successful'
                                        ) {
                                            toggleSpinner(false);
                                            setErrorTitle('Success!');
                                            const msg =
                                                'Welcome Back ' +
                                                user.email +
                                                ' !';
                                            setErrorMessage(msg);
                                            setOpen(true);
                                            return;
                                        }
                                    })
                                    .catch((err) => {
                                        if (err.response) {
                                            console.log(err.response);
                                        }
                                        console.log(err);
                                    });
                            });
                        }
                    }
                } else {
                    toggleSpinner(false);
                    setErrorTitle('User Error');
                    const msg =
                        'The user ' +
                        user.email +
                        " doesn't exist! Please Signup!";
                    setErrorMessage(msg);
                    setOpen(true);
                    return;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (newState === 'SIGNUP') {
        return (
            <div className="SignUp">
                <form onSubmit={handleSignUpSubmit}>
                    <Stack spacing={3} justifyContent={'center'}>
                        <TextField
                            id="email"
                            name="email"
                            label="Enter Username"
                            variant="outlined"
                            type="email"
                            value={user.email}
                            onChange={handleInputs}
                            InputProps={{
                                style: {
                                    borderRadius: '100px',
                                },
                            }}
                        />
                        <TextField
                            id="password1"
                            name="password1"
                            label="Enter Password"
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
                            label="Re-enter Password"
                            variant="outlined"
                            type="password"
                            value={user.password2}
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
                            Sign up
                        </Button>
                        <Dialog open={loading}>
                            <DialogContent>
                                <CircularProgress />
                            </DialogContent>
                        </Dialog>
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
                            className="login-btn"
                            startIcon={<Google />}
                        >
                            Login with Google
                        </Button>
                        <Button
                            variant="contained"
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
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                >
                    <DialogTitle>
                        {errorTitle !== 'Success!' ? (
                            <>
                                <ErrorOutline /> &nbsp;
                            </>
                        ) : (
                            <></>
                        )}
                        {errorTitle}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>{errorMessage}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Okay</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    } else if (newState === 'LOGIN') {
        return (
            <div className="SignUp">
                <form onSubmit={handleLoginSubmit}>
                    <Stack spacing={3} justifyContent={'center'}>
                        <TextField
                            id="email"
                            name="email"
                            label="Username"
                            variant="outlined"
                            type="text"
                            value={user.email}
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
                        <Dialog open={loading}>
                            <DialogContent>
                                <CircularProgress />
                            </DialogContent>
                        </Dialog>
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
                            className="login-btn"
                            startIcon={<Google />}
                        >
                            Login with Google
                        </Button>
                        <Button
                            variant="contained"
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
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                >
                    <DialogTitle>
                        {errorTitle !== 'Success!' ? (
                            <>
                                <ErrorOutline /> &nbsp;
                            </>
                        ) : (
                            <></>
                        )}
                        {errorTitle}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>{errorMessage}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Okay</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default SignUp;
