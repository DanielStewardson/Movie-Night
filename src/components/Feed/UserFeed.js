import './Feed.css';
import FeedItem from './FeedItem';

const UserFeed = ({ user, data }) => {

    // Change this stuff when correct data gets fed in
    const userData = data.filter(movie => user.watchlist.includes(movie.movieId));

    let watchListPrev = [];
    userData.forEach(element => {
        watchListPrev.push(element.title);
    });

    return (  
        <div className='feed'>
            <FeedItem data={ watchListPrev }/>
        </div>
    );
}
 
export default UserFeed;