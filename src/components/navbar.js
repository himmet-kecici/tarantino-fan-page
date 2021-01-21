import React from 'react';


const Navbar = () => (
    <nav>
        <h2 className='logo'><a className='logo-link' href='/#'>Quentin Tarantino</a></h2>
        <ul className='nav-menu'>
            <li><a className="nav-menu__link" href='/#'>Home</a></li>
            <li><a className="nav-menu__link" href='/#'>As Directors</a></li>
            <li><a className="nav-menu__link" href='/#'>As Actors</a></li>
            <li><a className="nav-menu__link" href='/#'>As Producers</a></li>
        </ul>
    </nav>
)
export default Navbar;