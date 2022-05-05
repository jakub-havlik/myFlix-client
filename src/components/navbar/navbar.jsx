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
    <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="navbar-logo" href="/">list[a]peli</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && (
              <Link className='profile-name' to={`/users/${user}`}>{user}</Link>
            )}
            {isAuth() && (
              <Button variant="link" label="Logout" onClick={() => {
                onLoggedOut()
              }}>Log out</Button>
            )}
            {!isAuth() && (
              <Nav.Link href="/register">Register</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}