import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/Login.jsx';
import FirstRecommendation from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/First-recommendation.jsx';
import StarAnimation from 'C:/Users/rusha/Documents/InfiniteOptions/now-showing-web/src/components/StarAnimation.jsx';

const Main = () => (
    // console.log("inside Main")
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route exact path="/login" element={<Login />} />
      <Route path="/firstRecommendation" element={<FirstRecommendation />} />
      <Route path="/" element={<StarAnimation />} />
      {/* <Route path="/game-details" element={<GameDetails />} /> */}
    </Routes>
  </Router>
);

export default Main;
