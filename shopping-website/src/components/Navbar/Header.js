import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import '../../Style/Navbar.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/signup" className="text-decoration-none text-light mx-2">Sign up</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/home" className="text-decoration-none text-light mx-2">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">Features</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header