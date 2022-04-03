import React, { useState } from 'react';
import './Navbar.css';
import { MainMenuNav } from './MainMenuNav';
import { AccountNavBar } from './AccountNavBar';
import { SearchBar } from '../SearchBar/Searchbar';

//images
import popcorn from '../../assets/popcorn.png';

export const NavBar = ( {user, onClick} )  => {

    const [mainNav, setMainNav] = useState(false); //Is main side nav active
    const mainNavActive = () => {
        setMainNav(!mainNav);
    }

    const [accountNav, setAccountNav] = useState(false); //Is account side nav active
    const accNavActive = () => {
        setAccountNav(!accountNav);
    }

    let accountIcon;
    if (user) {
        // accountIcon = <img src={user.profilePic} alt="" width='30px' height='30px' onClick={accNavActive} role='button' />;
        accountIcon = <div className="profile-icon" onClick={accNavActive} role='button'>{user.profilePic}</div>;
    } else { 
        accountIcon = <div className='iconLogInButton' onClick={() => onClick(2)} role='button'>Log In</div>;
    }

    return (
        <div>
            <div className="nav-title" onClick={onClick} role='button'>
                Movie Night
            </div>
            <div className="nav-wrapper">
                <div className="nav-icon">
                    <img src={popcorn} alt="" width='35px' height='35px' onClick={mainNavActive} role='button' />
                </div>
                <div>
                    {accountIcon}
                </div>
            </div>
            <SearchBar />
            <MainMenuNav isActive={ mainNav } />
            <AccountNavBar isActive={ accountNav } />
        </div>
    );
}