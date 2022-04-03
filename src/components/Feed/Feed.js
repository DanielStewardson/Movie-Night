// import React from "react";
import './Feed.css';
import React, { useState } from 'react';
import FeedItem from './FeedItem';

export const Feed = ({ loggedIn }) => {

    //Temp data until database set up
    const [tempPosts, setTempPosts] = useState([
        {type: 'newTrailer', body: 'Batman', id: 1},
        {type: 'newTrailer', body: 'LOTR', id: 2},
        {type: 'newTrailer', body: 'The Matrix', id: 3},
        {type: 'newTrailer', body: 'Titanic', id: 4},
        {type: 'newTrailer', body: 'Top Gun', id: 5},
        {type: 'movieReview', body: 'It was Great: Amy', user: 'Amy Calkin', id: 6},
        {type: 'movieReview', body: 'It was poop: Amy', user: 'Amy Calkin', id: 7},
        {type: 'movieReview', body: 'It was lame: Amy', user: 'Amy Calkin', id: 19},
        {type: 'movieReview', body: 'It was super: Amy', user: 'Amy Calkin', id: 20},
        {type: 'movieReview', body: 'It was avvers: Shirinda', user: 'Shireen Nicholls', id: 8},
        {type: 'movieReview', body: 'It was spanners: Shirinda', user: 'Shireen Nicholls', id: 9},
        {type: 'movieReview', body: 'It was meh: Shirinda', user: 'Shireen Nicholls', id: 10},
        {type: 'movieReview', body: 'It was awesomes: Shirinda', user: 'Shireen Nicholls', id: 21},
        {type: 'recommended', body: 'Recommended?', id: 11},
        {type: 'recommended', body: 'Recommended 2', id: 12},
        {type: 'recommended', body: 'Recommended 3', id: 13},
        {type: 'recommended', body: 'Recommended 4', id: 14},
        {type: 'trending', body: 'Trending stuff 1', id: 15},
        {type: 'trending', body: 'Trending stuff 2', id: 16},
        {type: 'trending', body: 'Trending stuff 3', id: 17},
        {type: 'trending', body: 'Trending stuff 4', id: 18}
    ]);

    const userFeed = (
        <div className='feed'>
            <FeedItem posts={ tempPosts.filter((post) => post.type === 'newTrailer') } />
            <FeedItem posts={ tempPosts.filter((post) => post.user === 'Amy Calkin') } />
            <FeedItem posts={ tempPosts.filter((post) => post.type === 'recommended') } />
        </div>
    )

    const generalFeed = (
        <div className='feed'>
            <FeedItem posts={ tempPosts.filter((post) => post.type === 'newTrailer') } />
            <FeedItem posts={ tempPosts.filter((post) => post.type === 'trending') } />
            <FeedItem posts={ tempPosts.filter((post) => post.type === 'movieReview') } />
        </div>
    )

   if (loggedIn) {
       return userFeed;
   }
   return generalFeed;
}