import React from 'react';
import Navigation from './Components/Navigation/Navigation.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import ProjectList from './Components/Projects/ProjectList.jsx';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const navItems = [{
  "id": 1,
  label: "Home",
  navLink: "/",
},
{
  "id": 2,
  label: "About",
  navLink: "/about",
},
{
  "id": 3,
  label: "Projects",
  navLink: "/projects",
},
{
  "id": 4,
  label: "Contact",
  navLink: "mailto:harsha.sam23@gmail.com",
}]

const App = () => {
  return (
    <Router>
      <Navigation navItems={navItems} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <ProjectList />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
