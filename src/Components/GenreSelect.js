import LargeGenreButton from "./LargeGenreButton";
import { Grid } from "@mui/material";
function GenreSelect(){
    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <LargeGenreButton Name="Action"></LargeGenreButton>
                </Grid>
                <Grid item xs={3}>
                    <LargeGenreButton Name="Comedy"></LargeGenreButton>
                </Grid>
                <Grid item xs={3}>
                    <LargeGenreButton Name="Fantasy"></LargeGenreButton>
                </Grid>
                <Grid item xs={3}>
                    <LargeGenreButton Name="Drama"></LargeGenreButton>
                </Grid>
            </Grid>
        </div>
    )
}


export default GenreSelect;