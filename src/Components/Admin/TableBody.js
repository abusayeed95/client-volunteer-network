import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './admin.css'

const TableBody = (props) => {
    const { name, fullName, email, _id, date, task } = props.tableData;

    const handleDelete = (id) => {
        fetch(`http://localhost:4444/cancelRegistration/?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <tr>
            <td>{name || fullName}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{task}</td>
            <td><button onClick={() => handleDelete(_id)} className="delete-icon bg-danger text-light rounded" ><FontAwesomeIcon icon={faTrashAlt} /></button></td>
        </tr>
    );
};

export default TableBody;