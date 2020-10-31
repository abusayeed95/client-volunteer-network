import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminRoute = ({ children, ...rest }) => {
    const [show, setShow] = useState(true);
    const [user] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email === 'sayeedsayem8@gmail.com' ? (
                    children
                ) : (
                        <>
                            <Modal show={show} onHide={() => setShow(false)}>
                                <Modal.Body>
                                    <h4>You're not an Admin. Don't Bother us by clicking here...</h4>
                                    <Link to="/home">Back To Home</Link>
                                </Modal.Body>
                            </Modal>
                            {/* <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            /> */}
                        </>
                    )
            }
        />
    );
};

export default AdminRoute;