import React from 'react';
import { BiUser } from "react-icons/bi";

function Header() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#about" className="nav-link scrollto"><BiUser /> <span>About Me</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a>
                    </li>
                    <li><a href="#experience" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Experience</span></a>
                    </li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
