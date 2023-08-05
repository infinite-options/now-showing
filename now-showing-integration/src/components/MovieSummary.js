import { BookmarkBorder, Star } from '@mui/icons-material';
import { Chip, Slider, Stack } from '@mui/material';

function MovieSummary () {
    return (
        <div className="Movie-Summary">
            <Stack spacing={2}>
                <Stack sx={{ margin: '15px -30px' }}>
                    <img
                        alt="Movie Poster"
                        src={require('../assets/img/spiderman.png')}
                    />
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    className="Movie-Title"
                >
                    <label>Spiderman: No Way Home</label>
                    <BookmarkBorder />
                </Stack>
                <Stack
                    justifyContent={'left'}
                    textAlign={'left'}
                    direction={'row'}
                    className="movie-rating"
                >
                    <Star className="star" /> &nbsp; <text>9.1/10 IMDb</text>
                </Stack>
                <Stack direction={'row'} justifyContent={'left'} spacing={1}>
                    <Chip
                        className="chip-text"
                        label="ACTION"
                        size="small"
                        clickable
                    />
                    <Chip
                        className="chip-text"
                        label="ADVENTURE"
                        size="small"
                        clickable
                    />
                    <Chip
                        className="chip-text"
                        label="FANTASY"
                        size="small"
                        clickable
                    />
                </Stack>
                <Stack direction={'row'} justifyContent={'left'} spacing={8}>
                    <Stack textAlign={'left'} justifyContent={'left'}>
                        <label className="info-top">Length</label>
                        <label className="info-bottom">2h 28min</label>
                    </Stack>
                    <Stack textAlign={'left'} justifyContent={'left'}>
                        <label className="info-top">Language</label>
                        <label className="info-bottom">English</label>
                    </Stack>
                    <Stack textAlign={'left'} justifyContent={'left'}>
                        <label className="info-top">Rating</label>
                        <label className="info-bottom">PG-13</label>
                    </Stack>
                </Stack>
                <Stack
                    spacing={2}
                    justifyContent={'left'}
                    className="Movie-Desc"
                >
                    <div className="desc-title">Description</div>
                    <div className="desc-text">
                        With Spider-Man's identity now revealed, Peter asks
                        Doctor Strange for help. When a spell goes wrong,
                        dangerous foes from other worlds start to appear,
                        forcing Peter to discover what it truly means to be
                        Spider-Man.
                    </div>
                </Stack>
                <Stack
                    className='Movie-Cast'
                    direction={'row'}
                    justifyContent={'space-between'}>
                    <div className='cast-title'>Cast</div>
                    <Chip
                        label="See more"
                        size="small"
                        className="cast-chip"
                        variant='outlined'
                        clickable
                    />
                </Stack>
                <Stack
                    className='Casting'
                    direction={'row'}
                    spacing={2}
                    justifyContent={'space-between'}>
                    <Stack className='cast-img' justifyContent={'space-between'}>
                        <img
                            alt='Cast 1'
                            src={require('../assets/img/cast1.png')} />
                        <div>Tom Holland</div>
                        <Slider
                            className='cast-slider'
                            size="small"
                            aria-label='Rating' />
                    </Stack>
                    <Stack className='cast-img' justifyContent={'space-between'}>
                        <img
                            alt='Cast 2'
                            src={require('../assets/img/cast2.png')} />
                        <div>Zendaya</div>
                        <Slider
                            className='cast-slider'
                            size="small"
                            aria-label='Rating' />
                    </Stack>
                    <Stack className='cast-img' justifyContent={'space-between'}>
                        <img
                            alt='Cast 3'
                            src={require('../assets/img/cast3.png')} />
                        <div>Benedict Cumberbatch</div>
                        <Slider
                            className='cast-slider'
                            size="small"
                            aria-label='Rating' />
                    </Stack>
                    <Stack className='cast-img' justifyContent={'space-between'}>
                        <img
                            alt='Cast 4'
                            src={require('../assets/img/cast4.png')} />
                        <div>Jacon Batalon</div>
                        <Slider
                            className='cast-slider'
                            size="small"
                            aria-label='Rating' />
                    </Stack>
                </Stack>
                <Stack className='Movie-Watch' spacing={2}>
                    <div className='watch-title'>Where to watch</div>
                    <Stack
                        direction={'row'}
                        spacing={4}
                        justifyContent={'space-between'}>
                        <img
                            className='watch-img'
                            alt="streaming-icon1"
                            src={require('../assets/img/icon_amazon.png')} />
                        <img
                            className='watch-img'
                            alt="streaming-icon2"
                            src={require('../assets/img/icon_netflix.png')} />
                        <img
                            className='watch-img'
                            alt="streaming-icon3"
                            src={require('../assets/img/icon_roku.png')} />
                        <img
                            className='watch-img'
                            alt="streaming-icon4"
                            src={require('../assets/img/icon_appletv.png')} />
                    </Stack>
                </Stack>
            </Stack>
        </div>
    );
}

export default MovieSummary;
