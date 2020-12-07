import React from 'react';
import myimg from './myimg.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import './About.css';

const aboutMe = "Hi, I'm Harsha. \n I'm a Computer Science undergraduate and a 19 year old programmer aspiring to become a full-stack developer. \n I enjoy and always strive to write efficient and optimized computer programs by using necessary data structures and algorithms.\n I'm curious about almost everything 😅. When I'm not coding, you'll find me browsing or spending time with family."
class About extends React.Component {

    componentDidMount(){
        this.props.onWindowChange("ABOUT");
    }

    render (){
        return(
            <div className="About">
                <div>
                    <img src={myimg} alt="harsha's profile pic" className="about-img"/>
                </div>
                <div className="About-text">
                    <ProjectCard title={"ABOUT"} 
                    info={aboutMe}
                    btntxt={"Check Work ↗"} btnlink="PROJECTS"/>
                </div>
            </div>
        )
    }
}
export default About;