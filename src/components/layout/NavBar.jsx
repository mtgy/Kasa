import './NavBar.scss'
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
         <Link to='/'>Acceuil</Link>
         <Link to='/a-propos'>A propos</Link>
        </nav>
    );
};

export default NavBar;