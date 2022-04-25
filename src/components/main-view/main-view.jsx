// main-view is the root component

import React from 'react';
import axios from 'axios';

<<<<<<< Updated upstream
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import { Container, Row, Col, Navbar } from 'react-bootstrap';
=======
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";

import { Navbar } from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';
import { UpdateUser } from '../profile-view/update-user';

import { Container, Row, Col } from 'react-bootstrap';

import './main-view.scss';
>>>>>>> Stashed changes


export class MainView extends React.Component {

  constructor() {
    super();
<<<<<<< Updated upstream
    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
=======
    this.state = {
      // Creating an empty array to hold movie data from database
      movies: [],
      // Set initial user state to null, used for user login --> Default is logged out
>>>>>>> Stashed changes
      user: null
    };
  }

<<<<<<< Updated upstream

  getMovies(token) {
    axios.get('https://listapeli.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {

        const movies = response.data.filter(({ Title, Description, ImagePath }) => Title && Description && ImagePath)

        this.setState({
          movies
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


=======
  // When token is present (user is logged in), get list of movies
>>>>>>> Stashed changes
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

<<<<<<< Updated upstream


  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

=======
>>>>>>> Stashed changes
  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }


<<<<<<< Updated upstream
  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }


  render() {
    const { movies, selectedMovie, user } = this.state;

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
      <>
        <Navbar bg="dark" variant="dark" className="mb-5">
          <Container>
            <Navbar.Brand href="#">list[a]peli</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text onClick={() => { this.onLoggedOut() }} style={{
                cursor: 'pointer'
              }}>
                Logout
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="main-view justify-content-md-center">
          {selectedMovie
            ? (
              <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            )
            : movies.map(movie => (
              <Col md={4} key={movie._id} >
                <MovieCard movieData={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            ))
          }
        </Row>
      </>
    );

=======
  getMovies(token) {
    axios.get('https://listapeli.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {
    const { movies, user } = this.state;



    return (
      <Router>
        < Navbar user={user} />
        <Container>

          <Row className="main-view justify-content-md-center">
            <Routes>

              <Route exact path="/" render={() => {
                /* If there is no user, the LoginView is rendered */
                /* If there is a user logged in, the user details are *passed as a prop to the LoginView */
                if (!user) return (
                  <Col md={6}>
                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                  </Col>
                )

                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;

                return movies.map(m => (
                  <Col xs={12} sm={6} md={4} lg={3} className="d-flex" key={m._id}>
                    <MovieCard movie={m} />
                  </Col>

                ))
              }} />

              <Route path="/register" render={() => {
                if (user) return <Redirect to="/" />
                return (
                  <Col xs={12} md={8}>
                    <RegistrationView />
                  </Col>
                )
              }} />
              <Route path="/movies/:movieId" render={({ match, history }) => {
                return (
                  <Col xs={12} md={10}>
                    <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                  </Col>
                )
              }} />
              <Route path={"/users/${user}"} render={({ history }) => {
                if (!user) return <Redirect to="/" />
                return (
                  <Col xs={12} md={10}>
                    <ProfileView user={user} movies={movies} onBackClick={() => history.goBack()} />
                  </Col>
                )
              }} />
              <Route path={"/directors/:name"} render={({ match, history }) => {
                if (!user) return <Redirect to="/" />
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col xs={12} md={10}>
                    <DirectorView movies={movies} director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                  </Col>
                )
              }} />
              <Route path={"/genres/:name"} render={({ match, history }) => {
                if (!user) return <Redirect to="/" />
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col xs={12} md={10}>
                    <GenreView movies={movies} genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                  </Col>
                )
              }} />


            </Routes>
          </Row>
        </Container>
      </Router>

    );


>>>>>>> Stashed changes
  }



<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
}














<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
