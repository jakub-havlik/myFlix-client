import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
//import './nav-bar.scss';

export function Navbar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
<<<<<<< Updated upstream
    <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="navbar-logo" href="/">list[a]peli</Navbar.Brand>
=======
    <Navbar className="main-nav" sticky="top" expand="lg" variant="dark">
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Link to="/">
          <Navbar.Brand className="navbar-logo">list[a]peli</Navbar.Brand>
        </Link>
>>>>>>> Stashed changes
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && (
<<<<<<< Updated upstream
              <Nav.Link id="nav-link" href="/profile">{user}</Nav.Link>
=======
              <Link to="/profile" className="nav-link">
                {user}
              </Link>
>>>>>>> Stashed changes
            )}
            {isAuth() && (
              <Button variant="link" label="Logout" onClick={() => {
                onLoggedOut()
              }}>Log out</Button>
            )}
            {!isAuth() && (
<<<<<<< Updated upstream
              <Nav.Link href="/register">Register</Nav.Link>
=======
              <Link className="nav-link" to="/register">
                Register
              </Link>
>>>>>>> Stashed changes
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
}