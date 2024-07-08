// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Task Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#tasks">Tasks</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
