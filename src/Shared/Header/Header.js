import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/Logo/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img src={logo}
                            alt="Site Logo"
                            width="50"
                            height="50" />
                        <h4 className="fw-bold mt-2">PatroMedic</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mx-auto">
                            <Nav.Link className="fw-bold text-dark" href="#home">Home</Nav.Link>
                            <Nav.Link className="fw-bold text-dark" href="#features">Features</Nav.Link>
                            <Nav.Link className="fw-bold text-dark" href="#pricing">Pricing</Nav.Link>
                        </Nav>

                        <Navbar.Text>
                            Signed in as: <a href="#login">Riad Rahman</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;