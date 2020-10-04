import React from 'react';
import { Button, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    return (
        <NavbarBootstrap className="px-5 pb-5" variant="light">
            <Link className="navbar navbar-brand" to="/home">
                <img className="logo" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
            </Link>
            <Nav className="ml-auto">
                <Link className="nav-link font-weight-bold" to="/home">Home</Link>
                <Link className="nav-link font-weight-bold" to="/destination">Destination</Link>
                <Link className="nav-link font-weight-bold" to="/blog">Blog</Link>
                <Link className="nav-link font-weight-bold" to="/events">Events</Link>
                <Button className="px-3 mx-2" onClick={() => history.push('/login')}>Login</Button>
                <Button className="px-3 mx-2 btn-dark" onClick={() => history.push('/admin')}>Admin</Button>
            </Nav>
        </NavbarBootstrap>
    );
};

export default Navbar;