import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './registration.css';

const Registration = () => {
    const [user, registerForm, setRegisterForm] = useContext(UserContext);
    const history = useHistory();
    const handleInput = (event) => {
        setRegisterForm({ ...registerForm, ...user, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://volunteer--network.herokuapp.com/registerForVolunteering', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerForm)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        history.push('/events')
    }
    return (
        <div className="register-page d-flex flex-column justify-content-center align-items-center">
            <div className="register-outside d-flex flex-column justify-content-center align-items-center">
                <img className="logo" src="https://i.ibb.co/60VGHLd/Group-1329.png" alt="Volunteer Network" />
                <div className="register-inside">
                    <h3>Register as a Volunteer</h3>
                    <form onSubmit={handleFormSubmit}>
                        <input onChange={handleInput} name="fullName" type="text" placeholder="Full Name" value={user.name || ''} required />
                        <input onChange={handleInput} name="email" type="email" placeholder="Email" value={user.email || ''} required />
                        <input onChange={handleInput} name="date" type="date" required />
                        <input onChange={handleInput} name="description" type="text" placeholder="Description" required />
                        <input onChange={handleInput} name="task" type="text" placeholder="Service Title" value={registerForm.task || ''} required />
                        <input className="btn btn-primary mt-4" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;