import React from 'react';
import "./ProjectCard.css"

const ProjectCard = ({ title, info, btntxt, btnlink}) => {
    return(
        <div className="projectcard">
            <div>
                <h2>{title}</h2>
                {
                    info.split("\n").map((line) => {
                    return <p className="code">{ line }</p>
                    })
                }
            </div>
            <a href={ btnlink } role="button" target="_blank" rel="noopener noreferrer">
                    <button>{ btntxt }</button>
            </a>
        </div>
    )
}
export default ProjectCard;