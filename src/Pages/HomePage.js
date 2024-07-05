import React from "react";
import AddMovie from "../Components/AddMovie";
import SmallTopBar from "../Components/SmallTopBar";
import GrayNavButton from "../Components/GrayNavButton";
import { Grid, Container, Stack } from "@mui/material";
import LoginButton from "../Components/LoginButton";
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className="Home">
                <SmallTopBar Name="Now Showing"></SmallTopBar>
                <h3 className="Title">My Favorites</h3>
                <Stack spacing={2}>
                    <div>
                        <Stack spacing={2}>
                            <AddMovie className='Favorite'></AddMovie>
                            <AddMovie className='Favorite'></AddMovie>
                            <AddMovie className='Favorite'></AddMovie>
                            <AddMovie className='Favorite'></AddMovie>
                            <AddMovie className='Favorite'></AddMovie>
                        </Stack>
                    </div>
                    <div>
                        <Stack spacing={4}>
                            <Link to="/Recommendations"><GrayNavButton Label='Get Recommendations'></GrayNavButton></Link>
                            <LoginButton>    
                            </LoginButton>
                        </Stack>
                        
                    </div>
                </Stack>
                
        </div>
    )
}

export default Home;