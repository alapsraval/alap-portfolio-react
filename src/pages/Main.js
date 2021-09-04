import React from 'react';
import Project from '../components/Project';
import { projects } from "../data/projects";
import { FaAt, FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Main() {
    return (
        <main id="main">
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Alap Raval</h2>
                        <h3>Full Stack JavaScript developer</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                            <img src="./assets/img/alap-profile-pic.jpeg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-9 pt-4 pt-lg-0 content">
                            <p>
                                I am a Full Stack JavaScript developer with expertise in HTML, CSS and JavaScript Frameworks.
                            </p>
                            <p>
                                I am experienced in HTML5, CSS3, Bootstrap, Javascript, JQuery, Angular,
                                Node, D3, React, Leaflet, Plotly, MySQL, MongoDB, Python, and Pandas. I am an excellent team player and
                                technology expert with
                                innovative designing skills, computer proficiency, and ability to work in a stressful environment.
                                I have strong communication skills, with the ability to convey concepts/requirements between technical and
                                non-technical stakeholders.
                            </p>
                            <h4>Skills</h4>
                            <p>Technologies: HTML, CSS, Bootstrap, JavaScript, jQuery, Node, Angular, D3, React, Leaflet, Plotly, ionic,
                                Media
                                Queries, LESS, SCSS, APIs, JSON, REST, AJAX, Python, Pandas, WordPress, R</p>
                            <p>Tools: MS Office, Adobe Suite, WebStorm IDE, Visual Studio Code, JupyterLab, Grunt, Bower, SLATE, AWS,
                                JIRA, MAMP/WAMP, Anaconda, Homebrew, GIT, Github, CLI, Tableau, VBA</p>
                            <p>Databases: MySQL, MS ACCESS, ORACLE, SQL Server, PostgreSQL, SQLite, MongoDB, Big Data</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Projects</h2>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {projects.map((project) => (
                            <Project imgURL={project.image} title={project.title} web={project.web} github={project.github} key={project.title} />
                        ))}
                    </div>
                </div>
            </section>
            <section id="experience" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Experience</h2>
                        <h4><a className="text-success" href="./assets/docs/Alap_Raval_Resume.pdf" target="_blank" rel="noreferrer" ><i
                            className='bx bx-cloud-download'></i> Download Resume</a></h4>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="resume-item">
                                <h4>Full Stack Developer</h4>
                                <h5>2021 - Current</h5>
                                <p><em>Maven Wave, Chicago, IL</em></p>
                                <ul>
                                    <li>Design, develop and implement full stack web applications.</li>
                                    <li>Maintain and improve code integrity, security, data protection, and quality.</li>
                                    <li>Collaborate with your team to design new and enhanced features for an outstanding user experience.
                                    </li>
                                    <li>Implement new product features and GUI’s, as well as improve and maintain existing functionality,
                                        monitor solutions and performance characteristics.</li>
                                    <li>Participate in design discussions, review sessions, and prototyping.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Developer</h4>
                                <h5>2016 - 2021</h5>
                                <p><em>Northwestern University, Evanston, IL</em></p>
                                <ul>
                                    <li>Maintain the undergraduate admission CRM - SLATE.</li>
                                    <li>Develop single page applications for various projects using HTML, CSS and JavaScript.</li>
                                    <li>Develop and maintain VBA and Python scripts for process automation.</li>
                                    <li>Maintain and monitor feeds between different enterprise systems.</li>
                                    <li>Develop web forms and integrate it with project management tools using web APIs.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="resume-item">
                                <h4>Front-End Developer</h4>
                                <h5>2014 - 2016</h5>
                                <p><em>Maven Wave Partners, Chicago, IL </em></p>
                                <ul>
                                    <li>Developing single page applications using JavaScript and AngularJS.</li>
                                    <li>Working on RWD using HTML5, CSS3, LESS and Bootstrap 3.0.</li>
                                    <li>Working on Mobile applications using AngularJS and ionic frameworks.</li>
                                    <li>Working on cross browser compatibility issues and fixing the bugs pertaining to various browsers.
                                    </li>
                                    <li>Help customers develop scalable applications with rich user experiences.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Front-End Developer</h4>
                                <h5>2012 - 2014</h5>
                                <p><em>Walgreens, Lincolnshire, IL </em></p>
                                <ul>
                                    <li>Developing web UI for POS applications using HTML5, JavaScript, jQuery Mobile and CSS3.</li>
                                    <li>Implementing Java controllers for interaction with the services. </li>
                                    <li>Creating cross-browser compatible and standards-compliant CSS-based page layouts.</li>
                                    <li>Writing client-side validation scripts for the POS applications using jQuery and JavaScript.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3">
                            <div className="email">
                                <i className="bi bi-envelope"><FaAt /></i>
                                <p><a href="mailto:alapsraval@gmail.com">alapsraval@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="phone">
                                <i className="bi bi-phone"><FaPhone /></i>
                                <p><a href="tel:‪630-297-7543‬">‪(630) 297-7543‬</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="linkedin">
                                <i className="bi"><FaLinkedinIn /></i>
                                <p><a href="https://www.linkedin.com/in/alapsraval/" target="_blank" rel="noreferrer" >Linkedin</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="github">
                                <i className="bi bi-github"><FaGithub /></i>
                                <p><a href="https://github.com/alapsraval" target="_blank" rel="noreferrer" >Github</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;