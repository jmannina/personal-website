import React from 'react';
import "./Title.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import NavLink from 'react-bootstrap/esm/NavLink';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



class Title extends React.Component{

    render(){

        return(
            <div className="Title">
                <Navbar id="navbar" sticky="top" expand="lg">
                <Navbar.Brand style={{ "margin-right": "5%" }} href="#home">
                    <img
                        alt=""
                        src="/mountain.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                    />{' '}
                    <h2 style={{ color: "white" }} >Joe Mannina</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <Nav.Link style={{ "margin-right": "5%" }} id='navlink' href="#work"><h2>EXPERIENCE</h2></Nav.Link>
                    <Nav.Link></Nav.Link>
                    <Nav.Link style={{ "margin-right": "5%" }} id='navlink' href="#project"><h2>PROJECTS</h2></Nav.Link>
                    <Nav.Link></Nav.Link>
                    <Nav.Link style={{ "margin-right": "5%" }} id='navlink' href="#contact"><h2>CONTACT</h2></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default Title;