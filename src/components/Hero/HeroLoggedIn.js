import './Hero.css';
import { Link } from 'react-router-dom';

export const HeroLoggedIn = ( { user } ) => {

    return (
        <div className='heroLoggedIn'>
            <div className='heroName'>
                <h1>{ user.name }</h1>
                <div className='heroProfilePic'>{ user.profilePic }</div>
            </div>
            <div className='heroStats'>
                <h3>Friends: { user.friends.length }</h3>
                <Link to={'/myWatchlist'}> <h3>Watchlist: { user.watchlist.length }</h3> </Link>
                <h3>Recent matches: ---</h3>
            </div>
        </div>
    )
}