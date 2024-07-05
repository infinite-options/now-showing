import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import SmallTopBar from "../Components/SmallTopBar";
import MovieCard from "../Components/MovieCard";
import GrayNavButton from '../Components/GrayNavButton'
import GenreSelect from "../Components/GenreSelect";
function Recommendations(){
    return(
        <div>
            <Container>
                <SmallTopBar Name="Try these"></SmallTopBar>
                <Stack spacing={2}>
                    <GenreSelect></GenreSelect>
                    <Grid container spacing={1} style={{}}>
                        <Grid item xs={6}> 
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid item xs={6}>
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid item xs={6}>
                            <MovieCard></MovieCard>
                        </Grid>
                        <Grid item xs={6}>
                            <MovieCard></MovieCard>
                        </Grid>

                    </Grid>
                    <GrayNavButton Label="More Recommendations"></GrayNavButton>
                </Stack>
                
            </Container>
        </div>
    )
}

export default Recommendations;