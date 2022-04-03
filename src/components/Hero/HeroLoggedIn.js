import './Hero.css';

export const HeroLoggedIn = ( { user } ) => {

    return (
        <div className='heroLoggedIn'>
            <div className='heroName'>
                <h1>{ user.name }</h1>
                <div className='heroProfilePic'>{ user.profilePic }</div>
            </div>
            <div>
                <h3>Friends: { user.friends.length }</h3>
                <h3>Watchlist: { user.watchlist.length }</h3>
                <h3>Recent matches: ---</h3>
            </div>
        </div>
    )
}