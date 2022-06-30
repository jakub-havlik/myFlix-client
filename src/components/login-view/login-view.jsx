import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Row,
  Col
} from "react-bootstrap";
import PropTypes from 'prop-types';
// react redux
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';
// styling
import './login-view.scss';



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


  const a = "{a}";

  return (

    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>list{a}peli</Card.Title>
                <Form className="m-5" style={{ color: 'black' }}>

                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      disabled={isLoading}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}
                    {isLoading ? ' Loading...' : 'Submit'}
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>




  );


}



LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired
  }),
  onLoggedIn: PropTypes.func.isRequired
}


// mapping the state of this component to its props
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

// connect function connects this component to the store
export default connect(mapStateToProps, { setUser })(LoginView);





