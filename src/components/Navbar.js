import React from 'react';
// import { BiUser, BiBookContent, BiFileBlank, BiEnvelope } from "react-icons/bi";
// import { BsPerson, BsReverseLayoutTextWindowReverse, BsFileEarmarkCode, BsEnvelope } from "react-icons/bs";
import { FaUser, FaGithub, FaFileCode, FaEnvelope } from "react-icons/fa";

function Header() {
    return (
        <nav id="navbar" className="navbar nav-menu">
            <ul>
                <li><a href="#about" className="nav-link scrollto"><FaUser size="1.5em" alt="about me" /> <span>About Me</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><FaGithub size="1.5em" alt="portfolio" /> <span>Projects</span></a>
                </li>
                <li><a href="#experience" className="nav-link scrollto"><FaFileCode size="1.5em" alt="experience" /> <span>Experience</span></a>
                </li>
                <li><a href="#contact" className="nav-link scrollto"><FaEnvelope size="1.5em" alt="contact" /> <span>Contact</span></a></li>
            </ul>
        </nav>
    );
}

export default Header;
