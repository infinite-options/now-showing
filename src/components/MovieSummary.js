import { BookmarkBorder, Star } from '@mui/icons-material';
import { Chip, Stack } from '@mui/material';

function MovieSummary () {
    return (
        <div className='Movie-Summary'>
            <Stack spacing={2}>
                <Stack sx={{ margin: '15px -15px', }}>
                    <img
                        alt='Movie Poster'
                        src={require('../assets/img/spiderman.png')} />
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}>
                    <label>Spiderman: No Way Home</label>
                    <BookmarkBorder />
                </Stack>
                <Stack
                    justifyContent={'left'}
                    textAlign={'left'}
                    direction={'row'}>
                    <Star /> &nbsp; <text>9.1/10 IMDB</text>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'left'}
                    spacing={1}>
                    <Chip
                        className="chip-text"
                        label="ACTION"
                        size="small"
                        clickable />
                    <Chip
                        className="chip-text"
                        label="ADVENTURE"
                        size="small"
                        clickable />
                    <Chip
                        className="chip-text"
                        label="FANTASY"
                        size="small"
                        clickable />
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'left'}
                    spacing={4}>
                    <Stack textAlign={'left'} justifyContent={'left'}>
                        <label className='info-top'>Length</label>
                        <label className='info-bottom'>2h 28min</label>
                    </Stack>
                    <Stack textAlign={'left'} justifyContent={'left'}>
                        <label className='info-top'>Language</label>
                        <label className='info-bottom'>English</label>
                    </Stack>
                    <Stack textAlign={'left'} justifyContent={'left'}>
                        <label className='info-top'>Rating</label>
                        <label className='info-bottom'>PG-13</label>
                    </Stack>
                </Stack>
                <Stack
                    spacing={2}
                    justifyContent={'left'}>
                    <h2 textAlign={'left'}>Description</h2>
                    <div textAlign={'left'}>
                        With Spider-Man's identity now revealed,
                        Peter asks Doctor Strange for help. When
                        a spell goes wrong, dangerous foes from
                        other worlds start to appear, forcing
                        Peter to discover what it truly means
                        to be Spider-Man.</div>
                </Stack>
            </Stack>
        </div>
    );
}

export default MovieSummary;