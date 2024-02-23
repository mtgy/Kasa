import "./Header.scss";
//import React from "react";
import LogoKasa from '@/assets/logoKasa.svg';
import NavBar from "@layout/navBar/NavBar";
import { Link } from "react-router-dom";


const Header = () => {
    console.log(LogoKasa);
    return (
        <header>
            <div className='logo'>
            <Link to='/'>
                 <img src={LogoKasa} alt="Logo de Kasa" />
            </Link></div>
            <NavBar />
        </header>
    );
};

export default Header;