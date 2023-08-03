import React, { useState } from 'react';
import { ThemeProvider, createTheme, Button } from '@mui/material';

import Header from './components/Header';
import MyProfile from './components/MyProfile';
import MovieSummary from './components/MovieSummary';
import SignUp from './components/SignUp';

import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
    const [state, setState] = useState('SIGNUP');

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const setNewState = (newState) => {
        setState(newState);
    };

    const handleNext = () => {
        if (state === 'HOME') {
            setState('PAGE2');
        } else if (state === 'PAGE2') {
            setState('PAGE3');
        }
    };

    const handlePrev = () => {
        if (state === 'PAGE2') {
            setState('HOME');
        } else if (state === 'PAGE3') {
            setState('PAGE2');
        }
    };

    if (state === 'SIGNUP') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    <Header title={'Create Account'} />
                    <SignUp newState={state} setNewState={setNewState} />
                </div>
            </ThemeProvider>
        );
    } else if (state === 'LOGIN') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    <Header title={'Login'} />
                    <SignUp newState={state} setNewState={setNewState} />
                </div>
            </ThemeProvider>
        );
    } else if (state === 'PROFILE') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    <Header title={'My Profile'} />
                    <MyProfile />
                </div>
            </ThemeProvider>
        );
    } else if (state === 'MOVIE') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    <Header title={'Movie Summary'} />
                    <MovieSummary />
                </div>
            </ThemeProvider>
        );
    } else if (state === 'HOME') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    {/* <Header title={'Now Showing'} /> */}
                    <Page1 />
                    <Button onClick={handlePrev} variant="outlined" disabled>
                        Prev
                    </Button>
                    <Button onClick={handleNext} variant="outlined">
                        Next
                    </Button>
                </div>
            </ThemeProvider>
        );
    } else if (state === 'PAGE2') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    {/* <Header title={'Now Showing'} /> */}
                    <Page2 />
                    <Button onClick={handlePrev} variant="outlined">
                        Prev
                    </Button>
                    <Button onClick={handleNext} variant="outlined">
                        Next
                    </Button>
                </div>
            </ThemeProvider>
        );
    } else if (state === 'PAGE3') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    {/* <Header title={'Now Showing'} /> */}
                    <Page3 />
                    <Button onClick={handlePrev} variant="outlined">
                        Prev
                    </Button>
                    <Button onClick={handleNext} variant="outlined" disabled>
                        Next
                    </Button>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
