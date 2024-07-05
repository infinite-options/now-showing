import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome.jsx';
import TryThese from './pages/TryThese.jsx';
import NowShowing from './pages/NowShowing.jsx';
import MovieDescription from './pages/MovieDescription.jsx';
import PageSwitch from './pages/PageSwitch.jsx';
import SharePopcorn from './pages/SharePopcorn.jsx';
import Ratings from './pages/Ratings.jsx';
import LogIn from './pages/LogIn.jsx';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<PageSwitch />} />
        <Route path="/tryThese" element={<TryThese />} />
        <Route path="/movieDescription" element={<MovieDescription />} />
        <Route path="/NowShowing" element={<NowShowing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sharePopcorn" element={<SharePopcorn />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
