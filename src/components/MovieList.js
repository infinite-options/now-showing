import { Box, Grid, ListItem, ListItemText } from '@mui/material';

function MovieList () {

    const moviesMain = [
        { 'id': 1, 'name': "Rounders", 'rating': 4.1 },
        { 'id': 2, 'name': "Cyrano", 'rating': 3.7 },
        { 'id': 3, 'name': "Scream 4", 'rating': 1.8 },
        { 'id': 4, 'name': "The Hitman", 'rating': 2.1 },
        { 'id': 5, 'name': "Candyman", 'rating': 3.3 },
        { 'id': 6, 'name': "Election", 'rating': 4.2 },
        { 'id': 7, 'name': "A Christmas Prince", 'rating': 2.0 },
        { 'id': 8, 'name': "Boiler Room", 'rating': 3.7 },
        { 'id': 9, 'name': "The Big Sick", 'rating': 4.7 },
        { 'id': 10, 'name': "Bad Moms", 'rating': 3.4 },
    ];
    return (
        <div className='List'>
            <div className='List-Header'>My Favorites</div>
            <Box>
                <Grid container columns={3}>
                    {moviesMain.map((item) => {
                        return (
                            <ListItem xs={12}>
                                <ListItemText xs={2}>
                                    {item.id}
                                </ListItemText>
                                <ListItemText xs={6}>
                                    {item.name}
                                </ListItemText>
                                <ListItemText xs={4}>
                                    {item.rating}
                                </ListItemText>
                            </ListItem>
                        );
                    })}
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default MovieList;