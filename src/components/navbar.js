import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <h2 className='logo'><a className='logo-link' href='/#'>Quentin Tarantino</a></h2>
        <ul className='nav-menu'>
            <li><NavLink className="nav-menu__link" activeClassName='activate' exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName='activate' to="/asdirectors/">As Directors</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName='activate' to="/asactors/">As Actors</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName='activate' to="/asproducers/">As Producers</NavLink></li>
        </ul>
    </nav>
)
export default Navbar;