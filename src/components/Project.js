import React from 'react';
import { BiWorld, BiCodeBlock } from "react-icons/bi";
function Project({ imgURL, title, web, github }) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
                <img src={imgURL} className="img-fluid" alt="" />
                <div className="portfolio-info">
                    <h4>{title}</h4>
                    <div className="portfolio-links">
                        {web && <a href={web} className="portfolio-details-lightbox"
                            data-glightbox="type: external" title="Portfolio Details" target="_blank" rel="noreferrer"><BiWorld /></a>}
                        {github && <a href={github} className="portfolio-details-lightbox"
                            data-glightbox="type: external" title="Portfolio Details" target="_blank" rel="noreferrer"><BiCodeBlock /></a>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;