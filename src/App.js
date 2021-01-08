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


const App = () => {
    return (
        <Router>
            <Navigation navItems={["Home", "About", "Projects", "Contact"]}/>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Home">
                <Home />
            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/Projects">
                <ProjectList />
            </Route>
            <Footer />
        </Router>
    );
}

export default App;
