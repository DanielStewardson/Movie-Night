import './Navbar.css';
import { NavLinkList } from './NavLinkList';

export const AccountNavBar = ({ isActive, onClick, handleLogOut }) => {

    //Add if searchbar open top comes down or up in height to match
    const navItems = ['My Watchlist', 'My Reviews', 'Friends', 'Movie Night', 'My Recommended',
     'Profile', 'Log Out'];

    return (
        <div className={`${isActive ? 'accIsActive' : 'accNotActive'}`} >
            <NavLinkList links={ navItems } onClick={ onClick } isActive={ isActive } handleLogOut={ handleLogOut } />
        </div>
    )
}