import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";
import "./App.css";
import MyProfile2 from "./MyProfile2.js";
import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";
import Page3 from "./pages/Page3.js";
import Page4 from "./pages/Page4.js";
import Page5 from "./pages/Page5.js";
import Page6 from "./pages/Page6.js";
import Popcorn from "./pages/Popcorn.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />

        <Route path="/pages/page2" element={<Page2 />} />
        <Route path="/pages/page3" element={<Page3 />} />
        <Route path="/pages/page5" element={<Page5 />} />
        <Route path="/pages/page6" element={<Page6 />} />
        <Route path="/Myprofile2" element={<MyProfile2 />} />
        <Route path="/pages/Popcorn" element={<Popcorn />} />

        <Route path="/pages/page4/:movie_title" element={<Page4 />} />
        <Route path="/" element={<Page4 />} />
        {/* <Route path="/pages/page4/:movie_title" element={<Page4 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
