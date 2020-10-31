import React, { useContext, useState } from 'react';
import { Button, Modal, Nav, Navbar as NavbarBootstrap } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const [showPopup, setShowPopup] = useState(false);
    const history = useHistory();

    const handleLogOut = () => {
        setUser('');
        sessionStorage.setItem('userToken', null);
        setShowPopup(false);
    };

    return (
        <NavbarBootstrap className="p-0" variant="light" expand="lg">
            <Link className="navbar navbar-brand" to="/home">
                <img className="logo my-1 my-md-2 my-lg-3" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
            </Link>
            {
                user.img ? <div className="btn p-0 d-lg-none ml-auto" title="Wanna Log Out? Click Here" onClick={() => setShowPopup(true)} style={{ height: '40px', width: '40px' }}><img src={user.img} alt="User" className="img-fluid rounded-circle" /></div> :
                    <Button className="d-lg-none ml-auto" onClick={() => history.push('/login')}>Login</Button>
            }
            {
                user.admin && <Button className="px-3 mx-2 d-lg-none btn-dark" onClick={() => history.push('/admin')}>Admin</Button>
            }
            <NavbarBootstrap.Toggle className="" aria-controls="collapse" />
            <NavbarBootstrap.Collapse id="collapse">
                <Nav className="ml-lg-auto navbar-links">
                    <Link className="nav-link font-weight-bold px-sm-3" to="/home">Home</Link>
                    <Link className="nav-link font-weight-bold px-sm-3" to="/destination">Destination</Link>
                    <Link className="nav-link font-weight-bold px-sm-3" to="/blog">Blog</Link>
                    <Link className="nav-link font-weight-bold px-sm-3 rounded mr-lg-2" to="/events">Your Events</Link>
                </Nav>
                {
                    user.img ? <div className="btn p-0 d-none d-lg-block" title="Wanna Log Out? Click Here" onClick={() => setShowPopup(true)} style={{ height: '40px', width: '40px' }}><img src={user.img} alt="User" className="img-fluid rounded-circle" /></div> :
                        <Button className="d-none d-lg-block" onClick={() => history.push('/login')}>Login</Button>
                }
                {
                    user.admin && <Button className="px-3 mx-2 d-none d-lg-block btn-dark " onClick={() => history.push('/admin')}>Admin</Button>
                }
            </NavbarBootstrap.Collapse >
            < Modal show={showPopup} onHide={() => setShowPopup(false)}>
                <Modal.Body>
                    <h3 className="p-5">Wanna Log Out??</h3>
                    <div className="buttons d-flex justify-content-end">
                        <Button onClick={handleLogOut} variant="danger">Log Out</Button> <Button onClick={() => setShowPopup(false)} variant="muted">Cancel</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </NavbarBootstrap >
    );
};

export default Navbar;