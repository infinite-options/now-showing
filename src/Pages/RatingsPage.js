import { Stack } from '@mui/material';
import AddMovie from '../Components/AddMovie'
import GrayNavButton from '../Components/GrayNavButton';
import SmallTopBar from '../Components/SmallTopBar';
import GenreSelect from '../Components/GenreSelect';
function RatingsPage(){
    return(
        <div className="RatingsPage">
            <SmallTopBar Name={'Ratings'}></SmallTopBar>
            <GenreSelect></GenreSelect>
            <h3>Add Ratings</h3>
            <AddMovie className='Rating'></AddMovie>
            <h3>My Ratings</h3>
            <Stack spacing={2}>
                <AddMovie className='Rating'></AddMovie>
                <AddMovie className='Rating'></AddMovie>
                <AddMovie className='Rating'></AddMovie>
                <AddMovie className='Rating'></AddMovie>
            </Stack>
            <GrayNavButton Label={'Get Recommendations'}></GrayNavButton>
        </div>
    )
}

export default RatingsPage;