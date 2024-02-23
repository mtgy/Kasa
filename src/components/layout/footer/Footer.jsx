import React from "react";
import LogoKasa from '@/assets/logoKasa.svg';
import { Link } from "react-router-dom";

const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <footer>
             <Link to='/'>
                 <img src={LogoKasa} alt="Logo de Kasa" />
            </Link>
            <h1>©{thisYear} Kasa. All rights reserved</h1>
        </footer>
    )
}

export default Footer;