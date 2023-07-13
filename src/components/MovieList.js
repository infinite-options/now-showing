function MovieList ({ listTitle, flag }) {

    const moviesMain = [
        { 'id': 1, 'name': "Rounders", 'rating': 4.1 },
        { 'id': 2, 'name': "Cyrano", 'rating': 3.7 },
        { 'id': 3, 'name': "Scream 4", 'rating': 1.8 },
        { 'id': 4, 'name': "The Hitman's Wife's Bodyguard", 'rating': 2.1 },
        { 'id': 5, 'name': "Candyman", 'rating': 3.3 },
    ];

    const moviesRecommend = [
        { 'id': 1, 'name': "Election", 'rating': 4.2 },
        { 'id': 2, 'name': "A Christmas Prince", 'rating': 2.0 },
        { 'id': 3, 'name': "Boiler Room", 'rating': 3.7 },
        { 'id': 4, 'name': "The Big Sick", 'rating': 4.7 },
        { 'id': 5, 'name': "Bad Moms", 'rating': 3.4 },
    ];

    return (
        <div className='List'>
            <div className='List-Header'>{listTitle}</div>
            <table className='Table'>
                <thead>
                    <tr>
                        <th className='Left-Pane'>
                            Movie Title
                        </th>
                        <th className='Right-Pane'>
                            My Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {flag ? moviesMain.map((items) => {
                        return (
                            <tr key={items.id}>
                                <td>{items.name}</td>
                                <td>{(items.rating).toFixed(1)}</td>
                            </tr>
                        );
                    }) : moviesRecommend.map((items) => {
                        return (
                            <tr key={items.id}>
                                <td>{items.name}</td>
                                <td>{(items.rating).toFixed(1)}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;