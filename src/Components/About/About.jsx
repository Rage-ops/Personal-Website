import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./About.css";
import myimg from "./myimg.png";

const aboutMe = `Just a ${new Date().getFullYear() - 2001} year old curious \
software engineer exploring the science of computers and technology.`;

const About = () => {
  return (
    <div className="About">
      <img src={myimg} alt="harsha's profile pic" className="about-img" />
      <div className="About-text">
        <ProjectCard
          title={"Who am I ?"}
          info={aboutMe}
          btntxt={"Check Work ↗"}
          btnlink="/projects"
        />
      </div>
    </div>
  );
};
export default About;
