import React from 'react';
import { Button, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarBootstrap className="px-5 py-4" variant="light">
            <Link className="navbar navbar-brand" to="/home">
                <img className="logo" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
            </Link>
            <Nav className="ml-auto">
                <Link className="nav-link font-weight-bold" to="/home">Home</Link>
                <Link className="nav-link font-weight-bold" to="/destination">Destination</Link>
                <Link className="nav-link font-weight-bold" to="/blog">Blog</Link>
                <Link className="nav-link font-weight-bold" to="/events">Events</Link>
                <Button className="px-3 mx-2">Login</Button>
                <Button className="px-3 mx-2 btn-dark">Admin</Button>
            </Nav>
        </NavbarBootstrap>
    );
};

export default Navbar;