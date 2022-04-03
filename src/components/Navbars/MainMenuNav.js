import { Link } from 'react-router-dom';
import './MainMenuNav.css';

export const MainMenuNav = ({ isActive }) => {

    //Add if searchbar open top comes down or up in height to match
    //If other side nav is opened close this one

    return (
        <div className={`mainNavWrapper ${isActive ? 'mainIsActive' : 'mainNotActive'}`} >
            <Link to='/'>Home</Link>
            <Link>Browse Movies</Link>
            <Link>Trending</Link>
            <Link>Latest Trailers</Link>
            <Link>Coming Soon</Link>
            <Link>Showtimes {'&'} Tickets</Link>
            <Link>Top Rated</Link>
            <Link>Movie News</Link>
        </div>
    )
}