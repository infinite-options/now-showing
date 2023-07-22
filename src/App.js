import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import Header from './components/Header';
import MyProfile from './components/MyProfile';
import MovieSummary from './components/MovieSummary';
import SignUp from './components/SignUp';

import './App.css';

function App() {
    // const state = 'MOVIE';
    const state = 'SIGNUP';

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    if (state === 'SIGNUP') {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App">
                    <Header title={'Create Account'} />
                    <SignUp />
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
