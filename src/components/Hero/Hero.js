// import React from "react";
import './Hero.css';
import { HeroNotLoggedIn } from "./HeroNotLoggedIn";
import { HeroLoggedIn } from "./HeroLoggedIn";

export const Hero = ( {onClick, loggedIn} ) => {

    if (loggedIn) {
        return <HeroLoggedIn />;
    }
        return <HeroNotLoggedIn onClick={onClick} />;
}