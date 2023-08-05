// import { useState } from 'react';
import { Search } from '@mui/icons-material';

function SearchBar () {

    // const [searchInput, setSearchInput] = useState('');

    // const movies = [

    // ];

    // const handleInput = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    // };

    // if (searchInput.length > 0) {
    //     movies.filter((movie) => {
    //         return movie.name.match(searchInput);
    //     });
    // }

    return (
        <div className="SearchBar">
            <Search className='SearchIcon' /> &nbsp;
            <input type="text" placeholder='Search Movie' />
        </div>
    );
}

export default SearchBar;