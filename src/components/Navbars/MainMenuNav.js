import './Navbar.css';
import { NavLinkList } from './NavLinkList';

export const MainMenuNav = ({ isActive, onClick }) => {

    //Add if searchbar open, top comes down or up in height to match
    const navItems = ['Home', 'Browse Movies', 'Trending', 'Latest Trailers', 'Coming Soon',
     'Showtimes & Tickets', 'Top Rated', 'Movie News'];

    return (
        <div className={`${isActive ? 'mainIsActive' : 'mainNotActive'}`}>
            <NavLinkList links={ navItems } onClick={ onClick } isActive={ isActive }/>
        </div>
    )
}