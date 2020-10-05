import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EventList = (props) => {
    const { task, img, date, _id } = props.scope;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleDelete = (id) => {
        fetch(`https://volunteer--network.herokuapp.com/deleteEvent/?id=${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.status === 200) {
                    setShow(true)
                }
            })
    };
    useEffect(() => {
        handleDelete();
    }, [])

    return (
        <tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h5 className="text-danger ">Deleted Successfully <FontAwesomeIcon icon={faTrashAlt} /></h5>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                </Modal.Body>
            </Modal>
            <td><div className="banner"><img src={img} alt="banner" className="img-fluid rounded-circle" /></div></td>
            <td>{task}</td>
            <td>{date || 'Not Available'}</td>
            <td><Button variant="danger" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
        </tr>
    );
};

export default EventList;