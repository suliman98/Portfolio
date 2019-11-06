import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from "./landingpage";
import About from "./about";
import Contact from "./contact";
const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/about" component={About} />
    </Switch>
)

export default Routes;