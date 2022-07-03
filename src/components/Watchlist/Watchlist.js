import './Watchlist.css';
import WatchlistCard from './WatchlistCard';
import React, { useState } from 'react';

const Watchlist = ( { user, data } ) => {

    const fullName = user.name.split(' ');

    const userWatchlist = data.filter(movie => user.watchlist.includes(movie.movieId));

    const [watchlist, setWatchlist] = useState(userWatchlist);

    const [genre, setGenre] = useState('default');
    const genreSelect = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'all') {
            setGenre('default');
            setWatchlist(userWatchlist);
            return;
        }
        setGenre(e.target.value);
        setWatchlist(userWatchlist.filter(movie => movie.genre.includes(e.target.value)));
    }

    return ( 
        <div className='watchlist'>
            <div className='watchlistHeader'>
                <h1>{ fullName[0] }'s watchlist</h1>
                <br></br>
                <div className='heroStats'>
                    <h3>Movies: { user.watchlist.length }</h3>
                    <h3>Friend matches: ---</h3>
                </div>
                <div className='filterWrapper'>
                    <button><h3>Compare with friends</h3></button>
                    <select name='genreSelect' id='genreSelect' value={ genre } onChange={ genreSelect }>
                        <option value='default' disabled hidden>Genre</option>
                        <option value='all'>All</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='fantasy'>Fantasy</option>
                    </select>
                </div>
            </div>
            <WatchlistCard data={ watchlist } />
        </div>
     );
}
 
export default Watchlist ;