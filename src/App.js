import React from 'react';

import Header from './components/Header';
import MyProfile from './components/MyProfile';

import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import MovieSummary from './components/MovieSummary';

function App () {

  const state = 'MOVIE';
  // const state = 'PROFILE';

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  if (state === 'PROFILE') {
    return (
      <ThemeProvider theme={darkTheme} >
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
