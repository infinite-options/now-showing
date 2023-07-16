import React, { useState } from 'react';

import Header from './components/Header';
import MovieList from './components/MovieList';
import Signup from './components/Signup';
import MyProfile from './components/MyProfile';
import SharePopcorn from './components/SharePopcorn';
import MyRatings from './components/MyRatings';

import './App.css';
import './assets/fonts/Actor.ttf';
import './assets/fonts/ACFilmstrip.otf';

function App () {

  const [state, setState] = useState('RATINGS');

  const handleGetRecommend = () => {
    setState('RECOMMEND');
  };

  const handleMoreRecommend = () => {
    setState('MAIN');

  };

  const setNewState = (newState) => {
    // console.log(newState);
    setState(newState);
  };

  if (state === 'MAIN' || state === 'LOGIN') {
    const headerTitle = 'Now Showing';
    const listTitle = 'My Favorites';
    return (
      <div className='App'>
        <Header title={headerTitle} />
        <div>
          <MovieList listTitle={listTitle} flag={true} />
          <div className='Recommend'>
            <button onClick={handleGetRecommend}> Get Recommendations </button>
          </div>
          <Signup state={state} setState={setNewState} />
        </div>
      </div>
    );
  } else if (state === 'RECOMMEND') {
    const headerTitle = 'Now Showing';
    const listTitle = 'Try These';
    return (
      <div className='App'>
        <Header title={headerTitle} />
        <div>
          <MovieList listTitle={listTitle} flag={false} />
          <Signup state={'RECOMMEND'} setState={setNewState} />
          <div className='Recommend'>
            <button onClick={handleMoreRecommend}> More Recommendations </button>
          </div>
        </div>
      </div>
    );
  } else if (state === 'SIGNUP') {
    const headerTitle = 'Create Account';
    return (
      <div className='App'>
        <Header title={headerTitle} />
        <Signup state={'SIGNUP'} setState={setNewState} />
      </div>
    );
  } else if (state === 'PROFILE') {
    const headerTitle = 'My Profile';
    return (
      <div className='App'>
        <Header title={headerTitle} />
        <MyProfile />
      </div>
    );
  } else if (state === 'SHARE') {
    const headerTitle = 'Share Popcorn';
    return (
      <div className='App'>
        <Header title={headerTitle} />
        <SharePopcorn />
      </div>
    );
  } else if (state === 'RATINGS') {
    const headerTitle = 'My Ratings';
    return (
      <div className='App'>
        <Header title={headerTitle} />
        <MyRatings />
      </div>
    );
  }

}

export default App;
