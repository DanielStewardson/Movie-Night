import './Feed.css';

const FeedItem = ({ data }) => {
    return (  
        <div className='sideScrollWrapper'>
            {data.map((data) => (
                <div className='feedItem' key={ data }>
                    { data } 
                </div>
            ))}
        </div>
    );
}
 
export default FeedItem;
