import './Feed.css';
// import React, { useState } from 'react';
import GeneralFeed from './GeneralFeed';
import UserFeed from './UserFeed';

export const Feed = ({ user, data, pending }) => {

   if (user) {
       return (
        <div>
            {pending && <h1>Loading..</h1>}
            {data && <UserFeed user={ user } data={ data } />}
        </div>
       )
   }
   return <GeneralFeed />;
//    Add general data to feed in futre for when not logged in
}