import './Feed.css';
import GeneralFeed from './GeneralFeed';
import UserFeed from './UserFeed';
import Loading from '../Messages/Loading';

export const Feed = ({ user, data, pending }) => {

   if (user) {
       return (
        <div>
            {pending && <Loading />}
            {data && <UserFeed user={ user } data={ data } />}
        </div>
       )
   }
   return <GeneralFeed />;
//    Add general data to feed in futre for when not logged in
}