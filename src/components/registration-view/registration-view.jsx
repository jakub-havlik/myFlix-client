import React, { useState } from 'react';
<<<<<<< Updated upstream
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username Required');
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr('Username must be 2 characters long');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password Required');
=======
import axios from 'axios';

import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Create RegistrationView as function component using Hooks
export function RegistrationView(props) {
  // Call useState method from React to initialize registration variables with an empty value
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  // Create hook for validation errors
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');

  // Create validation function
  const validate = () => {
    let isReq = true;

    if (!username) {
      setUsernameErr('Username is required!');
      isReq = false;
    } else if (username.length < 3) {
      setUsernameErr('Username must be at least 3 characters long');
      isReq = false;
    }

    if (!password) {
      setPasswordErr('Password is Required');
>>>>>>> Stashed changes
      isReq = false;
    } else if (password.length < 6) {
      setPassword('Password must be 6 characters long');
      isReq = false;
    }

<<<<<<< Updated upstream
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send request to the server for authentication */
      axios.post('https://listapeli.herokuapp.com/login', {
        Username: username,
        Password: password
      })
        .then(response => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user')
        });
    }
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
        {/* code added here to display validation error */}
        {usernameErr && <p>{usernameErr}</p>}
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {/* code added here to display validation error */}
        {passwordErr && <p>{passwordErr}</p>}
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
=======

    if (!email) {
      setEmailErr('Email is required!');
      isReq = false;
    }

    return isReq;
  }

  // Sending request to server for authentication
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default submit button behaviour, i.e., don't reload the page

    const isReq = validate();

    if (isReq) {

      /* Send a request to the server for authentication */
      /* then call this.props.onLoggedIn(username) */
      axios.post('https://listapeli.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
        .then(response => {
          const data = response.data;
          console.log(data);
          alert('Registration successful!');
          // the second argument '_self' is necessary so that the page will open in the current tab
          window.open('/', '_self');
        })
        .catch(e => {
          console.log('Could not register');
          alert('Unable to register');
        });
    }
  }

  // Return a registration form where users can submit their username, password, email and birthday
  // Listening to changes on input and then updating the respective states
  return (
    <>
      <h1>Registration</h1>
      <Form className="mb-3">
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username*:</Form.Label>
          <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
          {usernameErr && <p className="font-italic">{usernameErr}</p>}
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password*:</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
          {passwordErr && <p className="font-italic">{passwordErr}</p>}
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email*:</Form.Label>
          <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
          {emailErr && <p className="font-italic">{emailErr}</p>}
        </Form.Group>

        <Form.Group controlId="formBirthday" className="mb-3">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control type="date" onChange={e => setBirthday(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Form>
      <p>
        Already have an account?{'    '}
        <Link to={`/`}>
          <Button variant="link">Login!</Button>
        </Link>
      </p>
    </>
  );

>>>>>>> Stashed changes
}