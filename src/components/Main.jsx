import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Signup.jsx';
import Signup from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/Signup.jsx';
import Login from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/Login.jsx';
import FirstRecommendation from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/First-recommendation.jsx';
import StarAnimation from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/StarAnimation.jsx';
import Profile from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/Profile.jsx';
import MovieDetails from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/MovieDetails.jsx';
import SharePopcorn from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/SharePopcorn.jsx';

const Main = () => (
    // console.log("inside Main")
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/firstRecommendation" element={<FirstRecommendation />} />
      <Route path="/" element={<StarAnimation />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/movieDetails" element={<MovieDetails />} />
      <Route path="/sharePopcorn" element={<SharePopcorn />} />
      
      {/* <Route path="/game-details" element={<GameDetails />} /> */}
    </Routes>
  </Router>
);

export default Main;
