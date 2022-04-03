import { useEffect } from 'react';
import './Watchlist.css';
import WatchlistCard from './WatchlistCard';

const Watchlist = ( { user } ) => {

    const tempData = {
        userId: 1,
        userName: 'Shireen',
        friends: [],
        watchlist: ['The Matrix', 'Harry Potter and the Chamber of Secrets', 'The Guardians of the Galaxy', 'Thor', 'The Lord of the Rings, the Fellowship of the Ring', 'Movie 6', 'Movie 7', 'Movie 8',
        'Movie 9','Movie 10','Movie 11','Movie 12','Movie 13','Movie 14','Movie 15','Movie 16']
        };

    const fullName = tempData.userName.split(' ');

    useEffect(() => {

    }, []);

    return ( 
        <div className='watchlist'>
            <div className='watchlistHeader'>
                <h1>{ fullName[0] }'s watchlist</h1>
                <br></br>
                <p>Movies: { tempData.watchlist.length }</p>
                <p>Friend matches: 64</p>
                <div className='filterWrapper'>
                    <button>Compare with friends</button>
                    <p>Add filter/sort here</p>
                </div>
            </div>
            <WatchlistCard data={tempData} />
        </div>
     );
}
 
export default Watchlist ;