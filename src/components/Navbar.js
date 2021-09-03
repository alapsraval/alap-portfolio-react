import React from 'react';
import { BiUser, BiBookContent, BiFileBlank, BiEnvelope } from "react-icons/bi";

function Header() {
    return (
        <nav id="navbar" className="navbar nav-menu">
            <ul>
                <li><a href="#about" className="nav-link scrollto"><BiUser size="1.5em" /> <span>About Me</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><BiBookContent size="1.5em" /> <span>Projects</span></a>
                </li>
                <li><a href="#experience" className="nav-link scrollto"><BiFileBlank size="1.5em" /> <span>Experience</span></a>
                </li>
                <li><a href="#contact" className="nav-link scrollto"><BiEnvelope size="1.5em" /> <span>Contact</span></a></li>
            </ul>
        </nav>
    );
}

export default Header;
