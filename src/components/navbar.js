import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <div className="nav">
        <h2 className='logo'><NavLink className="logo-link" exact to="/">Quentin Tarantino</NavLink></h2>
        <ul className='nav-menu'>

            <li><NavLink className="nav-menu__link" activeClassName="activate" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="activate" to="/asdirectors/">As Director</NavLink></li>
            <li><NavLink className="nav-menu__link" activeClassName="activate" to="/asactors/">As Actor</NavLink></li>
        </ul>
    </div>
)
export default Navbar;