import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
// import Blog from './Components/Blog/Blog';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends Component{
  
  constructor(){
    super();
    this.state = {
      currWindow : ""
    }
  }

  onWindowChange = (to) => {
    this.setState({ currWindow: to });
  }

  render(){
    return (
      <Router>
        <div>
          <Navigation navitems={["HOME", "ABOUT", "PROJECTS", "CONTACT"]} active={ this.state.currWindow }/>
          <Route exact path="/ABOUT">
            <About onWindowChange={ this.onWindowChange }/>
          </Route>
          <Route exact path="/">
            <Home onWindowChange={ this.onWindowChange }/>
          </Route>
          <Route exact path="/HOME">
            <Home onWindowChange={ this.onWindowChange }/>
          </Route>
          <Route exact path="/PROJECTS">
            <Projects onWindowChange={ this.onWindowChange }/>
          </Route>
          {/* <Route exact path="/BLOG">
            <Blog onWindowChange={ this.onWindowChange }/>
          </Route> */}
          <Footer />
        </div>
      </Router>
    ); 
  }
}

export default App;
