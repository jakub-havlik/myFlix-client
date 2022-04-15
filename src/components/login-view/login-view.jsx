import React, { useState } from 'react';
<<<<<<< Updated upstream
=======
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
>>>>>>> Stashed changes

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


<<<<<<< Updated upstream
  /* In the login screen you should make the request to authenticate the user and then save the token to be used in future requests*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    // authenticate the user
    const response = await axios.post('https://listapeli.herokuapp.com/login', {
      Username: username,
      Password: password
    })

    // check if the request was successful and then proceed to save the token
    if (response.status === 200) {
      props.onLoggedIn(response.data.user._id, response.data.token);
    }

    // You should also cater for the cases where the response is `400` or `500` 

  };


  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} required={true} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} required={true} onChange={e => setPassword(e.target.value)} />
      </label>

      <button type="submit" onClick={handleSubmit}>Login</button>
      <button onClick={() => { onBackClick(null); }}>New User?</button>
    </form>
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
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
  };



  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
>>>>>>> Stashed changes
  );


}

<<<<<<< Updated upstream
=======





>>>>>>> Stashed changes
