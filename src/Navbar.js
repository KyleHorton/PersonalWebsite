import React from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'



function NavigationBar(){
    return(
        <div className="fullNav">
            <Navbar className="navbar" expand="lg">
                <Navbar.Brand className="navbar-title" > <span className="navbarText-title">Kyle Horton</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navbar-items">
                    <NavLink exact to="/" activeClassName="activeLink"><span className="navbarText">Home</span></NavLink>
                    <NavLink exact to="/work" activeClassName="activeLink"><span className="navbarText">Projects and Experience</span></NavLink>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default NavigationBar;