import React from 'react';
import myimg from './myimg.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import './About.css';

const aboutMe = "I'm a CS junior undergraduate based in India and just a 19 year old guy aspiring to become a full-stack developer. I enjoy solving DS and Algo problems and I always strive to write efficient code. I mostly learn from MOOCs.\n When I'm not coding, you'll find me working out in the gym or spending time with family."
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