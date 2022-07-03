import { Link } from 'react-router-dom';

export const NavLinkList = ({ links, onClick, handleLogOut }) => {

    return (
        <div className='sideNavWrapper'>
            {links.map((link) => {
                if (link === 'Log Out') {
                    return <p onClick={ () => {handleLogOut(); onClick();} } key={ link }>{ link }</p>
                }
                let route = link.replace(/\s+/g, '');
                return (
                <Link to={ '/' + route } onClick={ onClick } key={ link }>{ link }</Link>
                    )
                })
            }
        </div>
    )
}