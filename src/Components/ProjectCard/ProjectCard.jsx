import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, info, btntxt, btnlink }) => {
    return (
        <div className="projectcard">
            <h2>{title}</h2>
            {info.split("\n").map((line, index) => {
                return <p key={index} className="code">{line}</p>;
            })}
            <a href={btnlink} role="button">
                <button>{btntxt}</button>
            </a>
        </div>
    );
};
export default ProjectCard;
