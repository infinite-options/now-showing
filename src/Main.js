import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage'
import MovieDetails from './Pages/MovieDetailsPage'
import Recommendations from './Pages/RecommendationsPage'
import Donate from './Pages/DonatePage'
import Ratings from './Pages/RatingsPage'
import Login from './Pages/LogInPage'
import SignUp from './Pages/SignUpPage'
import { Container } from "@mui/material";
function Main(){
    return(
        <div className="Main">
            <BrowserRouter>
            <Container maxWidth="sm"> 

                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Home" element={<Home></Home>}></Route>
                    <Route path="/MovieDetails" element={<MovieDetails></MovieDetails>}></Route>
                    <Route path="/Recommendations" element={<Recommendations></Recommendations>}></Route>
                    <Route path="/Donate" element={<Donate></Donate>}></Route>
                    <Route path="/Ratings" element={<Ratings></Ratings>}></Route>
                    <Route path="/Login" element={<Login></Login>}></Route>
                    <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
                    

                </Routes>
            </Container>
            </BrowserRouter>
        </div>
    )
}

export default Main;