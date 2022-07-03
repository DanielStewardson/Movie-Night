import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
import { MainMenuNav } from './MainMenuNav';
import { AccountNavBar } from './AccountNavBar';
import { SearchBar } from '../SearchBar/Searchbar';

//images
import popcorn from '../../assets/popcorn.png';

export const NavBar = ( {user, onClick, logOut} )  => {
    const history = useHistory();
    const handleLogOut = () => { //return to home page on log out
        history.push('/home');
        logOut();
    }
    const handleClick = () => { //close side navbars on link click
        setMainNav(false);
        setAccountNav(false);
    }

    const [mainNav, setMainNav] = useState(false); //Is main side nav active
    const mainNavActive = () => {
        setMainNav(!mainNav);
        setAccountNav(false);
    }

    const [accountNav, setAccountNav] = useState(false); //Is account side nav active
    const accNavActive = () => {
        setAccountNav(!accountNav);
        setMainNav(false);
    }

    let accountIcon;  //To - Do: make profile picture appear on nav 
    if (user) {
        accountIcon = <div className="profile-icon" onClick={accNavActive} role='button'>{ user.profilePic }</div>;
    } else { 
        accountIcon = <div className='iconLogInButton' onClick={() => onClick(2)} role='button'>Log In</div>; //Hard coded user log in while testing 
    }

    return (
        <div> 
            <div className="nav-title" onClick={handleLogOut} role='button'> {/*temp log out on title while building*/}
                Movie Night
            </div>
            <div className="nav-wrapper">
                <div className="nav-icon">
                    <img src={ popcorn } alt="" width='35px' height='35px' onClick={mainNavActive} role='button' />
                </div>
                <div>
                    { accountIcon }
                </div>
            </div>
            <SearchBar />
            <MainMenuNav isActive={ mainNav } onClick={ handleClick } />
            <AccountNavBar isActive={ accountNav } onClick={ handleClick } handleLogOut={ handleLogOut } />
        </div>
    );
}