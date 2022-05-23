import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    setIsLoading(true);
    axios.post('https://listapeli.herokuapp.com/login', {
      Username: username,
      Password: password
    })
      .then(response => {
        const data = response.data;
        setIsLoading(false);
        props.onLoggedIn(data);
      })
      .catch(e => {
        console.log(e)
        setIsLoading(false);
      });
  };



  return (
<<<<<<< Updated upstream
    <Form className="m-5">
=======
    <Form className="m-5" style={{ color: 'white' }}>
>>>>>>> Stashed changes
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" disabled={isLoading} placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control disabled={isLoading} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}
        {isLoading ? ' Loading...' : 'Submit'}
      </Button>
    </Form>
  );


}






