// import React from "react";
import './Hero.css';

export const HeroNotLoggedIn = ( {onClick} ) => {

    return (
        <div className='logInButtons'>
            <button onClick={() => onClick(0)}>Log in with Account (SN)</button>
            <button onClick={() => onClick(1)}>Log in with Apple (AC)</button>
            <button onClick={() => onClick(3)}>Log in with Facebook (CB)</button>
            <a href='/'>Create account</a>
        </div>
    )
}
















