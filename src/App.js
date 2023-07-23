import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import MyProfile from './components/MyProfile';
import MovieSummary from './components/MovieSummary';
import SignUp from './components/SignUp';

import './App.css';

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
    }
}

export default App;
