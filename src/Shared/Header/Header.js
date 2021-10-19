import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo/logo.png';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
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
                        <Nav.Link as={Link} className="fw-bold text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="fw-bold text-dark" to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} className="fw-bold text-dark" to="/contact">Contact</Nav.Link>
                    </Nav>

                    <Navbar.Text className="d-flex align-items-center">
                        {user?.email ?
                            <Nav.Link onClick={logOut} className="fw-bold text-dark">Logut</Nav.Link> :
                            <Nav.Link as={Link} className="fw-bold text-dark" to="/login">Login</Nav.Link>
                        }
                        {user.displayName ? user?.displayName : user?.email}
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;