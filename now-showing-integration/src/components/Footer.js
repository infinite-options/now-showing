import {
    BookmarkBorder,
    GroupWork,
    PersonOutline
} from '@mui/icons-material';
import { Grid } from '@mui/material';

function Footer () {
    return (
        <div className='Footer'>
            <Grid container columns={3} xs={12} columnSpacing={3}>
                <Grid item xs={12}>
                    <GroupWork />
                    <BookmarkBorder />
                    <PersonOutline />
                </Grid>
            </Grid>

        </div>
    );
}

export default Footer;