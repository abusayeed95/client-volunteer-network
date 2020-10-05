import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';

const UsersEvents = (props) => {
    const { taskThumbnail, date, _id, task } = props.event;
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [fetched, setFetched] = useState(true);

    const handleClose = () => setShow(false);

    const handleCancel = (id) => {
        fetch(`https://volunteer--network.herokuapp.com/cancelRegistration/?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true)
                    setHide(true)
                    setFetched(!fetched)
                }
            })
    };
    useEffect(() => {
        handleCancel()
    }, [fetched])

    return (
        <><Modal show={show} onHide={handleClose}>
            <Modal.Body className="d-flex flex-column justify-content-center">
                <h4 className="text-danger my-5 text-center">Cancelled Successfully <FontAwesomeIcon icon={faWindowClose} /></h4>
                <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            </Modal.Body>
        </Modal>
            {
                hide ? null :
                    <Col xs={6} className="p-3">
                        <Row className="m-0 tasks-box bg-light p-3">
                            <Col xs={3} className="w-100 h-100">
                                <img className="img-fluid" src={taskThumbnail} alt="Volunteer Scope" />
                            </Col>
                            <Col xs={9} className="d-flex flex-column justify-content-center align-items-center">
                                <h3>{task}</h3>
                                <p><strong>Date:</strong> {date}</p>
                                <Button onClick={() => handleCancel(_id)} variant="danger">Cancel</Button>
                            </Col>
                        </Row>
                    </Col>
            }
        </>
    );
};

export default UsersEvents;