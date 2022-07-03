import './Watchlist.css';

const WatchlistCard = ( { data } ) => {

    return ( 
        <div className='watchlistItemsWrapper'>
            {data.map((movie) => (
                <div className='watchlistCard' key={ movie.movieId }>
                    <div className='watchlistCardImage'>
                        <img src={ movie.images.poster } alt=''></img>
                    </div>
                    <div className='watchlistCardText'>
                        <div className='watchlistCardTitle'>
                            <h3>{ movie.title }</h3>
                        </div>
                        <div className='watchlistCardStars'> 
                            { movie.rating }/10 
                        </div>
                    </div>
                </div>
            ))}
        </div >
     );
}

export default WatchlistCard;