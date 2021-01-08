import React, { useState, useCallback } from 'react';
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
    const [window, setWindow] = useState('Home');

    const handleWindowChange = useCallback((curr) => {
        setWindow(curr);
    }, [])

    return (
        <Router>
            <Navigation navItems={["Home", "About", "Projects", "Contact"]}
                window={window}/>
            <Route exact path="/">
                <Home handleWindowChange={handleWindowChange}/>
            </Route>
            <Route exact path="/Home">
                <Home handleWindowChange={handleWindowChange}/>
            </Route>
            <Route exact path="/About">
                <About handleWindowChange={handleWindowChange}/>
            </Route>
            <Route exact path="/Projects">
                <ProjectList handleWindowChange={handleWindowChange}/>
            </Route>
            <Footer />
        </Router>
    );
}

export default App;
