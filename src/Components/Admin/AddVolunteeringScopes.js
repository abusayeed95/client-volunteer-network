import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const AddVolunteeringScopes = () => {
    const [addScope, setAddScope] = useState({ color: "rgba(0,0,0,0.5" });
    const handleInput = (e) => {
        setAddScope({ ...addScope, [e.target.name]: e.target.value });
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleAddEvent = (e) => {
        e.preventDefault();
        fetch('https://volunteer--network.herokuapp.com/addVolunteeringScope', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addScope)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setShow(true)
    }
    return (
        <div className="form-area">
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Successfully Added Event</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div>
                <h2>Add Event</h2>
            </div>
            <Form className="main-form" onSubmit={handleAddEvent}>
                <Row className="m-0">
                    <Col xs={6}>
                        <Form.Group controlId="title">
                            <Form.Label><strong>Event Title</strong></Form.Label>
                            <Form.Control onChange={handleInput} name="task" type="text" placeholder="Title for this event" required />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="date">
                            <Form.Label><strong>Event Date</strong></Form.Label>
                            <Form.Control onChange={handleInput} name="date" type="date" />
                            <Form.Text>
                                Date of the event
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label><strong>Description</strong></Form.Label>
                            <Form.Control onChange={handleInput} name="description" as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="banner">
                            <Form.Label><strong>Banner</strong></Form.Label>
                            <Form.Control onChange={handleInput} name="img" type="text" placeholder="Banner Link" />
                        </Form.Group>
                        <Form.Text>
                            Please Provide a valid image source link for this event
                        </Form.Text>
                    </Col>
                    <Col xs={12}>
                        <Button variant="primary" type="submit">
                            Add Event
                        </Button>
                    </Col>
                </Row>
            </Form >
        </div >
    );
};

export default AddVolunteeringScopes;