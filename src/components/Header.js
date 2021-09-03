import React from 'react';
import { BiUser } from "react-icons/bi";
import Navbar from '../components/Navbar';

function Header() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <Navbar />
        </header>
    );
}

export default Header;
