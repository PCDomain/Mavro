import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#header">Header</Nav.Link>
                        <Nav.Link href="#sidebar">Sidebar</Nav.Link>
                        <Nav.Link href="#footer">Footer</Nav.Link>
                        <Nav.Link href="#taskform">TaskForm</Nav.Link>
                        <Nav.Link href="#tasklist">TaskList</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
