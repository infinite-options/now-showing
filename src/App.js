import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";
import "./App.css";
import MyProfile2 from "./MyProfile2.js";
import MyFavorites from "./pages/MyFavorites.js";
import TryThese from "./pages/TryThese.js";
import MyRatings from "./pages/MyRatings.js";
import Results from "./pages/Results.js";
import Recommendations from "./pages/Recommendations.js";
import TryThese2 from "./pages/TryThese2.js";
import Popcorn from "./pages/Popcorn.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyFavorites />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/pages/TryThese" element={<TryThese />} />
        <Route path="/pages/TryThese2" element={<TryThese2 />} />
        <Route path="/pages/MyRatings" element={<MyRatings />} />
        <Route path="/pages/Recommendations" element={<Recommendations />} />
        <Route path="/Myprofile2" element={<MyProfile2 />} />
        <Route path="/pages/Popcorn" element={<Popcorn />} />
        <Route path="/pages/Results/:movie_title" element={<Results />} />
        <Route path="/" element={<Results />} />
        <Route path="/pages/Results/:movie_title" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
