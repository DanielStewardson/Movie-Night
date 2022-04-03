import './Feed.css';

const FeedItem = ({ posts }) => {
    return (  
        <div className='sideScrollWrapper'>
            {posts.map((post) => (
                <div className='feedItem' key={ post.id }>
                    { post.body } 
                </div>
            ))}
        </div>
    );
}
 
export default FeedItem;
