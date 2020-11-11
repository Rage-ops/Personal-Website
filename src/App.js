import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import './App.css';

class App extends Component{
  
  constructor(){
    super();
    this.state = {
      currWindow: "HOME"
    }
  }

  onWindowChange = (to) => {
    this.setState({ currWindow: to });
  }

  render(){
    return (
      <div>
        <Navigation onWindowChange={this.onWindowChange} active={ this.state.currWindow } navitems={["HOME", "ABOUT", "PROJECTS", "BLOG", "CONTACT"]}/>
        {
          this.state.currWindow === "HOME"? <Home onWindowChange = {this.onWindowChange}/>
          : 
          (
            this.state.currWindow === "ABOUT"?
            <About />
            :
            (
              this.state.currWindow === "PROJECTS"?
              <Projects />
              :
              (
                this.state.currWindow === "BLOG"?
                <Blog/>
                :<div></div>
                
              )
            )
          )
        }
        <Footer />
      </div>
    ); 
  }
}

export default App;
