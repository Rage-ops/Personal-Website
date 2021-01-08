import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./About.css";
import myimg from "./myimg.png";

const aboutMe = `Hi, I'm Harsha.
I'm a Computer Science undergraduate and a 19 year old programmer \
aspiring to become a full-stack developer.
I enjoy and always strive to write efficient and optimized computer programs \
using necessary data structures and algorithms.
I'm curious about almost everything 😅. \
When I'm not coding, you'll find me browsing or spending time with family.`;

const About = () => {
    return (
        <div className="About">
            <img src={myimg} alt="harsha's profile pic" className="about-img" />
            <div className="About-text">
                <ProjectCard
                    title={"About"}
                    info={aboutMe}
                    btntxt={"Check Work ↗"}
                    btnlink="/projects"
                />
            </div>
        </div>
    );
};
export default About;
