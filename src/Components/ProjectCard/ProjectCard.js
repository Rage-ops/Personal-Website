import React from 'react';
import "./ProjectCard.css"

const ProjectCard = ({ title, info, btntxt, btnlink}) => {
    return(
        <div className="projectcard">
            <div className="mb">
                <h2>{title}</h2>
                {
                    info.split("\n").map((line) => {
                    return <p>{ line }</p>
                    })
                }
                <a href={ btnlink } role="button">
                    <button>{ btntxt }</button>
                </a>
            </div>
        </div>
    )
}
export default ProjectCard;