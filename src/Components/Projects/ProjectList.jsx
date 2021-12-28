import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "./Projects";
import "./ProjectList.css";

const ProjectList = () => {
  return (
    <div className="Projects">
      {projects.map((project) => {
        const { id, title, tags, info, linkType, link } = project;
        return (
          <div className="mb" key={id}>
            <ProjectCard
              title={title}
              tags={tags}
              info={info}
              btntxt={linkType}
              btnlink={link}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ProjectList;
