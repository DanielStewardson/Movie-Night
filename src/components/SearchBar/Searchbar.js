// import React from "react";
import './SearchBar.css';

export const SearchBar = (props)  => {

    //Add hide when scrolling down and show on reload or scroll back up

    return (
        <div className="search-wrapper">
            <div className='input-wrapper'>
                <input type='text' placeholder=' Find your film..' className="search-bubble" />
                <button type="submit" className="search-button">Search</button>
            </div>
        </div>
    );
}