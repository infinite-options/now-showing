import React, { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Signup from './components/Signup';

import './App.css';
import './fonts/Actor.ttf';
import './fonts/ACFilmstrip.otf';

function App () {

  const [state, setState] = useState('MAIN');
  // const [headerTitle1, setHeaderTitle1] = useState('Now');
  // const [headerTitle2, setHeaderTitle2] = useState('Showing');
  const [listTitle, setListTitle] = useState('My Favorites');

  const handleGetRecommend = () => {
    setState('RECOMMEND');
    setListTitle('Try These');
  };

  const handleMoreRecommend = () => {
    setState('MAIN');
    setListTitle('My Favorites');

  };

  const headerTitle1 = 'Now';
  const headerTitle2 = 'Showing';

  return (
    <div className='App'>
      <Header title1={headerTitle1} title2={headerTitle2} />
      {state === 'MAIN' ?
        (
          <div>
            <MovieList listTitle={listTitle} flag={true} />
            <div className='Recommend'>
              <button onClick={handleGetRecommend}> Get Recommendations </button>
            </div>
            <Signup flag={true} />
          </div>
        ) : (
          <div>
            <MovieList listTitle={listTitle} flag={false} />
            <Signup flag={false} />
            <div className='Recommend'>
              <button onClick={handleMoreRecommend}> More Recommendations </button>
            </div>
          </div>)
      }
    </div>
  );
}

export default App;
