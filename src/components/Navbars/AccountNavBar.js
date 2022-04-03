import { Link } from 'react-router-dom';
import './AccountNavBar.css';

export const AccountNavBar = ({ isActive }) => {

    //Add if searchbar open top comes down or up in height to match
    //If other side nav is opened close this one

    return (
        <div className={`accNavWrapper ${isActive ? 'accIsActive' : 'accNotActive'}`} >
            <Link to='/myWatchlist'>My Watchlist</Link>
            <Link>My Reviews</Link>
            <Link>Friends</Link>
            <Link>Movie Night</Link>
            <Link>My Recommended</Link>
            <Link>Profile</Link>
            <Link>Log out</Link>
        </div>
    )
}

<a href='/google.com'>Link to google</a>