import React, { useContext, useRef } from 'react';
import { UserContext } from '../../App';
import './registration.css';

const Registration = () => {
    const [user, setUser, registerForm, setRegisterForm] = useContext(UserContext)
    const handleInput = (event) => {
        setRegisterForm({ ...registerForm, [event.target.name]: event.target.value })
        // if (e.target.name === 'fullName') {
        //     setRegisterForm({ ...registerForm, name: e.target.value })
        // }
        // if (e.target.name === 'email') {
        //     setRegisterForm({ ...registerForm, email: e.target.value })
        // }
        // if (e.target.name === 'date') {
        //     setRegisterForm({ ...registerForm, date: e.target.value })
        // }
        // if (e.target.name === 'description') {
        //     setRegisterForm({ ...registerForm, description: e.target.value })
        // }
        // if (e.target.name === 'task') {
        //     setRegisterForm({ ...registerForm, task: e.target.value })
        // }
    }
    // const nameRef = useRef();
    // const emailRef = useRef();
    // const dateRef = useRef();
    // const descriptionRef = useRef();
    // const taskRef = useRef();


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(registerForm)
        // const newForm = { name: nameRef.current.value, email: emailRef.current.value, date: dateRef.current.value, description: descriptionRef.current.value, task: taskRef.current.value }

        // if (registerForm.name && registerForm.email && registerForm.date && registerForm.description && registerForm.task) {
        //     fetch('http://localhost:4444/registerForVolunteering', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(registerForm)
        //     })
        //         .then(res => res.json())
        //         .then(data => console.log(data))
        // }
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