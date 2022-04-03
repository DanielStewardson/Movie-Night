// import React from "react";
import './Hero.css';
import { HeroNotLoggedIn } from "./HeroNotLoggedIn";
import { HeroLoggedIn } from "./HeroLoggedIn";

export const Hero = ( {onClick, user} ) => {

    if (user) {
        return <HeroLoggedIn user={user} />;
    }
        return <HeroNotLoggedIn onClick={onClick} />;
}