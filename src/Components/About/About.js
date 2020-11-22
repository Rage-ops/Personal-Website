import React from 'react';
import myimg from './myimg.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import './About.css';

class About extends React.Component {

    componentDidMount(){
        this.props.onWindowChange("ABOUT");
    }

    render (){
        return(
            <div className="About container">
                <div>
                    <img src={myimg} alt="harsha's profile pic" className="about-img"/>
                </div>
                <div className="About-text">
                    <ProjectCard title={"ABOUT"} info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae erat elementum, faucibus augue eget, ultrices turpis. In fringilla, leo eget bibendum ornare, libero turpis tristique nisl, eget vehicula leo dui vel quam. \nOrci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin leo ex, feugiat ac libero ut, tristique dictum dolor. Fusce maximus nisi quam, egestas dignissim diam placerat non. Fusce ultrices porttitor enim, at eleifend enim molestie a. Quisque id congue tellus. In fermentum massa lorem, quis fringilla dolor posuere non. "}
                    btntxt={"check work"} btnlink=""/>
                </div>
            </div>
        )
    }
}
export default About;