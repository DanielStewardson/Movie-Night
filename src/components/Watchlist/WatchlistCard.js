import './Watchlist.css';

const WatchlistCard = ( { data } ) => {

    return ( 
        <div className='watchlistItemsWrapper'>
            {data.watchlist.map((movie) => (
                <div className='watchlistCard' key={movie}>
                    <div className='watchlistCardImage'>
                        Image here
                    </div>
                    <div className='watchlistCardText'>
                        <div className='watchlistCardTitle'>
                            <h3>{ movie }</h3>
                        </div>
                    <div className='watchlistCardStars'>* * * * * * *</div> {/*Change to dynamic rating*/}
                    </div>
                </div>
            ))}
        </div >
     );
}

export default WatchlistCard;