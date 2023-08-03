import { useEffect, useState } from 'react';
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
import jwt_decode from 'jwt-decode';

function SignUp({ newState, setNewState }) {
    const [user, setUser] = useState({
        email: '',
        password1: '',
        password2: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        role: '',
    });

    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [socialId, setSocialId] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [accessExpiresIn, setAccessExpiresIn] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [errorTitle, setErrorTitle] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    let CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    let CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
    const GOOGLE_LOGIN = process.env.REACT_APP_GOOGLE_LOGIN;
    let SCOPES =
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';

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
        } else if (errorTitle === 'User Error') {
            setNewState('SIGNUP');
        }
        if (errorTitle === 'Success!') {
            setNewState('HOME');
        }
    };

    const handleEmailSignUpSubmit = async (e) => {
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

    const handleEmailLoginSubmit = async (e) => {
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

    let googleSignupCallback = (tokenResponse) => {
        if (tokenResponse && tokenResponse.code) {
            let auth_code = tokenResponse.code;
            let authorization_url =
                'https://accounts.google.com/o/oauth2/token';

            var details = {
                code: auth_code,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                redirectUri: 'postmessage',
                grant_type: 'authorization_code',
            };

            var formBody = [];

            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + '=' + encodedValue);
            }

            formBody = formBody.join('&');

            fetch(authorization_url, {
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: formBody,
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let at = data['access_token'];
                    let rt = data['refresh_token'];
                    let ax = data['expires_in'];
                    //  expires every 1 hr
                    setAccessToken(at);
                    // stays the same and used to refresh ACCESS token
                    setRefreshToken(rt);
                    setAccessExpiresIn(ax);
                    //  use ACCESS token, to get email and other account info
                    axios
                        .get(
                            'https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' +
                                at
                        )
                        .then((response) => {
                            let data = response.data;

                            let email = data['email'];
                            let userSocialId = data['id'];
                            let firstName = data['given_name'];
                            let lastName = data['family_name'];

                            setUserEmail(email);
                            setUserFirstName(firstName);
                            setUserLastName(lastName);
                            setSocialId(userSocialId);

                            const socialGoogle = async () => {
                                const user = {
                                    email: userEmail,
                                    password: GOOGLE_LOGIN,
                                    first_name: userFirstName,
                                    last_name: userLastName,
                                    role: '',
                                    phone_number: '',
                                    google_auth_token: at,
                                    google_refresh_token: rt,
                                    social_id: socialId,
                                    access_expires_in: ax,
                                };
                                await axios
                                    .post(
                                        'https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/UserSocialSignUp/FINDME',
                                        // 'http://127.0.0.1:2000/api/v2/UserSocialSignUp/FINDME',
                                        user
                                    )
                                    .then((response) => {
                                        console.log(response);
                                        if (
                                            response.data.message ===
                                            'User already exists'
                                        ) {
                                            setErrorTitle(
                                                'User Creation Failed'
                                            );
                                            const msg =
                                                'The user ' +
                                                user.email +
                                                ' already exists! Please Log In!';
                                            setErrorMessage(msg);
                                            setOpen(true);
                                            return;
                                            // add validation
                                        } else {
                                            toggleSpinner(false);
                                            setErrorTitle('Success!');
                                            const msg =
                                                'Welcome ' + user.email + ' !';
                                            setErrorMessage(msg);
                                            setOpen(true);
                                        }
                                    });
                            };
                            socialGoogle();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    return (
                        accessToken,
                        refreshToken,
                        accessExpiresIn,
                        userEmail,
                        socialId
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    //   run onclick for authorization and eventually sign up
    const googleSignUp = async () => {
        if (window.google) {
            // initialize a code client for the authorization code flow.
            let codeClient = window.google.accounts.oauth2.initCodeClient({
                client_id: CLIENT_ID,
                scope: SCOPES,
                callback: googleSignupCallback,
            });
            console.log(codeClient);
            codeClient.requestCode();
        }
    };

    const googleLoginCallback = (response) => {
        var userObject = jwt_decode(response.credential);
        if (userObject) {
            let email = userObject.email;
            setUserEmail(email);
            let user_id = '';

            axios
                .get(
                    // `http://127.0.0.1:2000/api/v2/UserToken/FINDME/${email}`
                    `https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/UserToken/FINDME/${email}`
                )
                .then((response) => {
                    const dbData = response['data']['result'];
                    console.log(dbData.length);
                    if (dbData.length === 0) {
                        toggleSpinner(false);
                        setErrorTitle('User Error');
                        const msg =
                            'The user ' +
                            user.email +
                            " doesn't exist! Please Signup!";
                        setErrorMessage(msg);
                        setOpen(true);
                        return;
                    } else {
                        setAccessToken(dbData[0]['google_auth_token']);

                        user_id = dbData[0]['user_uid'];
                        let old_at = dbData[0]['google_auth_token'];
                        let refreshToken = dbData[0]['google_refresh_token'];

                        // Need to validate the Access Token from Google OAuth Server
                        fetch(
                            `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${old_at}`,
                            {
                                method: 'GET',
                            }
                        )
                            .then((response) => {
                                if (response['status'] === 400) {
                                    // Need to refresh the access token
                                    let authorization_url =
                                        'https://accounts.google.com/o/oauth2/token';

                                    let details = {
                                        refresh_token: refreshToken,
                                        client_id: CLIENT_ID,
                                        client_secret: CLIENT_SECRET,
                                        grant_type: 'refresh_token',
                                    };

                                    let formBody = [];
                                    for (var property in details) {
                                        let encodedKey =
                                            encodeURIComponent(property);
                                        let encodedValue = encodeURIComponent(
                                            details[property]
                                        );
                                        formBody.push(
                                            encodedKey + '=' + encodedValue
                                        );
                                    }
                                    formBody = formBody.join('&');

                                    fetch(authorization_url, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type':
                                                'application/x-www-form-urlencoded;charset=UTF-8',
                                        },
                                        body: formBody,
                                    })
                                        .then((response) => {
                                            // console.log(response);
                                            return response.json();
                                        })
                                        .then((responseData) => {
                                            console.log(responseData);
                                            return responseData;
                                        })
                                        .then((data) => {
                                            let at = data['access_token'];
                                            setAccessToken(at);
                                            let url = `https://mrle52rri4.execute-api.us-west-1.amazonaws.com/dev/api/v2/UpdateAccessToken/FINDME/${user_id}`;
                                            // `http://127.0.0.1:2000/api/v2/UpdateAccessToken/FINDME/${user_id}`;

                                            axios
                                                .post(url, {
                                                    google_auth_token: at,
                                                })
                                                .then((response) => {})
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                                            return accessToken;
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                        });
                                } else {
                                    // Current Access token is valid
                                    setAccessToken(old_at);
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                });

            socialGoogle(email);
        }
    };

    const socialGoogle = async (e) => {
        toggleSpinner(false);
        setErrorTitle('Success!');
        const msg = 'Welcome ' + userEmail + ' !';
        setErrorMessage(msg);
        setOpen(true);
    };

    const googleLoginInit = async () => {
        // Rendering the Sign in with Google btn
        if (window.google) {
            await window.google.accounts.id.renderButton(
                document.getElementById('loginGoogleDiv'),
                {
                    theme: 'outline',
                    text: 'signin_with',
                    shape: 'pill',
                    size: 'large',
                }
            );
        }
    };

    const googleInitialize = async () => {
        if (window.google) {
            //  initializes the Sign In With Google client based on the configuration object
            await window.google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: googleLoginCallback,
            });
        }
    };

    useEffect(() => {
        googleInitialize();
        googleLoginInit();
    });

    // Rendered Components
    if (newState === 'SIGNUP') {
        return (
            <div className="SignUp">
                <form>
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
                            onClick={handleEmailSignUpSubmit}
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
                        <div id="signupGoogleDiv"></div>
                        <Button
                            variant="contained"
                            className="login-btn"
                            startIcon={<Google />}
                            onClick={googleSignUp}
                        >
                            Signup with Google
                        </Button>
                        <Button
                            variant="contained"
                            className="login-btn"
                            startIcon={<Instagram />}
                        >
                            Signup with Instagram
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
        googleLoginInit();
        return (
            <div className="SignUp">
                <form>
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
                            onClick={handleEmailLoginSubmit}
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
                        <div id="loginGoogleDiv"></div>
                        {/* <Button
                            variant="contained"
                            className="login-btn"
                            startIcon={<Google />}
                        >
                            Login with Google
                        </Button> */}
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
