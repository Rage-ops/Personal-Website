import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ title, tags, info, btntxt, btnlink }) => {
  return (
    <div className="projectcard">
      <h2>{title}</h2>
      <div className="flex-container">
        {tags?.map((tag, index) => {
          return <h4 className="tag-item" key={index}>{`#${tag}`}</h4>;
        })}
      </div>
      {info.split("\n").map((line, index) => {
        return (
          <p key={index} className="code">
           {line}
          </p>
        );
      })}
      {btnlink.startsWith("/") ? (
        <Link to={btnlink}>
          <button>{btntxt}</button>
        </Link>
      ) : (
        <a href={btnlink} role="button">
          <button>{btntxt}</button>
        </a>
      )}
    </div>
  );
};
export default ProjectCard;
