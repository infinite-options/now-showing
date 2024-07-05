import React from "react";
import Popcorn from '../Assets/Popcorn.png'
import { Container, Grid } from "@mui/material";
import GrayNavButton from "../Components/GrayNavButton";

function DonatePage(){
    return(
        <div className="DonatePage">
            <div className="TopBar">
                <Container>
                    <div><h1 className="Title Header" style={{fontSize: '64px', color: 'white'}}>Share Popcorn</h1></div>
                    <div style={{textAlign: 'left'}}>Thanks for supporting our efforts!</div>
                </Container>
                
            </div>

            <Grid container spacing={1} style={{}} justifyContent={'bottom'}>
                <Grid item xs={4}>
                    <img src={Popcorn} width={'44px'} height={'64px'}></img>
                </Grid>
                <Grid item xs={4} >
                    <img src={Popcorn} width={'66px'} height={'97px'}></img>
                </Grid>
                <Grid item xs={4}>
                    <img src={Popcorn}  width={'84px'} height={'123px'}></img>
                </Grid>
            </Grid>

            <GrayNavButton Label='Donate'></GrayNavButton>
        </div>
    )
}

export default DonatePage;