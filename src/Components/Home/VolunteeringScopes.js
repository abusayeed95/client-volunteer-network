import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const VolunteeringScopes = (props) => {
    const { color, img, task, _id } = props.scopes;
    const [registerForm, setRegisterForm] = useContext(UserContext);
    const history = useHistory();

    const handleRegistration = (id, scope) => {
        setRegisterForm({ ...registerForm, task: scope })
        console.log(registerForm)
        history.push("/registration")
    }
    return (
        <Col onClick={() => handleRegistration(_id, task)} xs={3} className="d-flex justify-content-around align-items-center pb-5">
            <div className="task-box d-flex align-items-end" style={{ background: `url('${img}')`, backgroundSize: '270px 300px ', backgroundRepeat: 'no-repeat' }}>
                <h5 className="text-center text-light p-4 w-100 task-name" style={{ background: `${color}` }}>{task}</h5>
            </div>
        </Col>
    );
};

export default VolunteeringScopes;