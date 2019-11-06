import React, { Component } from "react";
import {Nav} from 'react-bootstrap';
import 'assets/style.css';

const NavItem = props => {

    //link for current page gets active class
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";

    return(
        <li className = {liClassName}>
            <a href={props.path} className="nav-link">
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    )
}


class TopNavigation extends Component {
    render(){
        return(
            <Nav className="navigation navbar  navbar-expand-md navbar-light">
                <div className="container-fluid">
                <a className="navbar-brand" id="site-logo"href="/"><h1 id="navbar-logo">$ULIMAN</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-navigation-collapse" aria-controls="site-navigation-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse collapse" id="site-navigation-collapse">
                    <ul className="nav navbar-nav ml-auto">
                        {/* Declaring li with custom NavItem function */}
                        <NavItem path="/" name="Home" />
                        <NavItem path="/about" name="About" />
                        <NavItem path="/contact" name="Contact" />
                    </ul>
                    </div>
                </div>
            </Nav>
        )
    }
}

export default TopNavigation;