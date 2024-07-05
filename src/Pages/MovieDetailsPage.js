import React from "react";
import { Container, Grid } from "@mui/material";
import SmallTopBar from "../Components/SmallTopBar";
import MovieCard from "../Components/MovieCard";
import GrayNavButton from '../Components/GrayNavButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import MovieImage from "../Assets/SpidermanMovie.png"

function MovieDetails(){
    return(
        <div>
            <div>
                <img src={MovieImage}></img>
            </div>
            <Container>
                <Link to='/Recommendations'><ArrowBackIcon style={{color: 'white'}}></ArrowBackIcon></Link>
                
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <p>Length</p>
                        <p>2h 28min</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>Language</p>
                        <p>English</p>
                    </Grid>
                    <Grid item xs={4}>
                        <p>Rating</p>
                        <p>PG-13</p>
                    </Grid>
                </Grid>
                <h3>Description</h3>
                <p className="TextContent Description">
                    With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, 
                    dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
                </p>
                <h3>Cast</h3>
                <h3>Where to Watch</h3>
            </Container>
        </div>
    )
}

export default MovieDetails;