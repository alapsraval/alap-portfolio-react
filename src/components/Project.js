import React from 'react';
import { FaLink, FaGithub } from "react-icons/fa";
function Project({ imgURL, title, web, github }) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
                <img src={imgURL} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h4>{title}</h4>
                    <div className="portfolio-links">
                        {web && <a href={web} className="portfolio-details-lightbox px-2"
                            data-glightbox="type: external" title="Portfolio Details" target="_blank" rel="noreferrer"><FaLink /></a>}
                        {github && <a href={github} className="portfolio-details-lightbox px-2"
                            data-glightbox="type: external" title="Portfolio Details" target="_blank" rel="noreferrer"><FaGithub /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;