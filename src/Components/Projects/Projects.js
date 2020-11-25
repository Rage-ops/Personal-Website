import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css'

class Projects extends React.Component{
    
    componentDidMount(){
        this.props.onWindowChange("PROJECTS");
    }

    render(){
        return(
            <div className="Projects">
                <div className="mb">
                    <ProjectCard title={"Smart-Brain 🧠"} 
                    info={ "Full-stack web app that uses clarifai api to detect faces in the URL provided images.\nRegistration and Sign in functionality are provided, allowing users to keep track of number of images they've checked.\nFront-end built using React, back-end server built using Node js with Express, PostgreSQL is used for database system."} 
                    btntxt={"Visit live site ↗"}
                    btnlink= {"https://rage-ops.github.io/smart-brain/"}
                    />
                </div>
                <div className="mb">
                    <ProjectCard 
                    title={"Chess A.I 🤖"} 
                    info={"Implemented an AI which plays chess optimally using Minimax algorithm and Alpha-beta pruning for optimization."} 
                    text={"View code here ↗"}
                    btntxt="View code here ↗"
                    btnlink= {"https://github.com/Rage-ops/Chess-AI"}/>
                </div>
            </div>
        )
    }
}
export default Projects;