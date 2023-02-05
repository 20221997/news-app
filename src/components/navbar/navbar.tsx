// import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { routes } from '../../router/routes';

const classes = {
    navbar:'navbar',
    content:'navbar__content',
    item:'navbar__content__item',
}

export const Navbar = () => {

    // const [navbar, setNavbar] = useState(false);

    return (
        <nav className={classes.navbar}>
            <ul className={classes.content}>
                {
                    routes.map( (route) => (
                        <li key={route.to} className={classes.item}>
                            <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                {route.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* <button className='barIcon' onClick={() => setNavbar(!navbar)}>
                {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button> */}
        </nav>
    )
}
