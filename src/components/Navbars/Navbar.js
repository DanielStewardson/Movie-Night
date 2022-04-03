// import React from "react";
import './Navbar.css';

//images
import popcorn from '../../assets/popcorn.png';
import profileIcon from '../../assets/female-profile.png';

export const NavBar = (props)  => {

    let accountIcon;
    if (props.loggedIn) {
        accountIcon = <img src={profileIcon} alt="" width='30px' height='30px' onClick={props.onAccClick} role='button' />;
    } else { 
        accountIcon = <div className='iconLogInButton' onClick={props.onClick}>Log In</div>;
    }

    return (
        <div>
            <div className="nav-title" onClick={props.onClick} role='button'>
                Movie Night
            </div>
            <div className="nav-wrapper">
                <div className="nav-icon">
                    <img src={popcorn} alt="" width='35px' height='35px' onClick={props.onMainClick} role='button' />
                </div>
                <div className="profile-icon">
                    {accountIcon}
                </div>
            </div>
        </div>
    );
}