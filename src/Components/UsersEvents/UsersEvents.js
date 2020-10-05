import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const UsersEvents = (props) => {
    const { email, taskThumbnail, date, _id, uniqueId, task } = props.event;

    const handleCancel = (id) => {
        fetch(`https://volunteer--network.herokuapp.com/cancelRegistration/?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
    useEffect(() => {
        handleCancel()
    }, [task])

    return (
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
    );
};

export default UsersEvents;