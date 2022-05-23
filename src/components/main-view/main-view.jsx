// main-view is the root component

<<<<<<< Updated upstream
import React from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Routes,
=======
<<<<<<< Updated upstream
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
=======
import React from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
>>>>>>> Stashed changes
  Redirect,
} from "react-router-dom";

import { Navbar } from "../navbar/navbar";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";

import { Container, Row, Col } from "react-bootstrap";
<<<<<<< Updated upstream
=======

import "./main-view.scss";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      // Creating an empty array to hold movie data from database
      movies: [],
      // Set initial user state to null, used for user login --> Default is logged out
      user: null,
    };

    this.addMovieToFavorites = this.addMovieToFavorites.bind(this);

  }



  // When token is present (user is logged in), get list of movies
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }
>>>>>>> Stashed changes
>>>>>>> Stashed changes

import "./main-view.scss";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      // Creating an empty array to hold movie data from database
      movies: [],
      // Set initial user state to null, used for user login --> Default is logged out
      user: null,
    };
  }

  // When token is present (user is logged in), get list of movies
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

<<<<<<< Updated upstream
  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

<<<<<<< Updated upstream
  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }
=======
=======

  addMovieToFavorites(movieId) {
    return axios.post(`https://listapeli.herokuapp.com/users/${this.state.user}/movies/${movieId}`,
      {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    )
  }


  render() {
    const { movies, user } = this.state;

    return (
      <Router>
        <Navbar user={user} />
        <Container>
          <Row className="main-view justify-content-md-center">
            <Route
              exact
              path="/"
              render={() => {
                /* If there is no user, the LoginView is rendered */
                /* If there is a user logged in, the user details are *passed as a prop to the LoginView */
                if (!user)
                  return (
                    <Col md={6}>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );

                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return (
                  <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border text-light" style={{ width: "3rem", height: "3rem" }} role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                );

                return movies.map((m) => (
                  <Col xs={12} sm={6} md={4} lg={3} className="d-flex mt-3" key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                ));
              }}
            />

            <Route
              path="/register"
              render={() => {
                if (user) return <Redirect to="/" />;
                return (
                  <Col xs={12} md={8}>
                    <RegistrationView />
                  </Col>
                );
              }}
            />
            <Route path="/movie/:movieId" render={({ match, history }) => {
              return (
                <Col xs={12} md={10}>
                  <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} addMovieToFavorites={this.addMovieToFavorites} />
                </Col>
              )
            }} />
>>>>>>> Stashed changes
>>>>>>> Stashed changes

  getMovies(token) {
    axios
      .get("https://listapeli.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const movies = response.data.filter(
          ({ Title, Description, ImagePath }) =>
            Title && Description && ImagePath
        );

        this.setState({
          movies,
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
        <Navbar user={user} />
        <Container>
          <Row className="main-view justify-content-md-center">
            <Route
              exact
              path="/"
              render={() => {
                /* If there is no user, the LoginView is rendered */
                /* If there is a user logged in, the user details are *passed as a prop to the LoginView */
                if (!user)
                  return (
                    <Col md={6}>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );

                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;

                return movies.map((m) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    className="d-flex"
                    key={m._id}
                  >
                    <MovieCard movie={m} />
                  </Col>
                ));
              }}
            />

            <Route
              path="/register"
              render={() => {
                if (user) return <Redirect to="/" />;
                return (
                  <Col xs={12} md={8}>
                    <RegistrationView />
                  </Col>
                );
              }}
            />
            <Route
              path="/movies/:movieId"
              render={({ match, history }) => {
                return (
                  <Col xs={12} md={10}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.movieId)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              exact
              path="/profile"
              render={({ history }) => {
                if (!user) {
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                }

                return (
                  <Col md={8}>
                    <ProfileView
                      movies={movies}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path={"/directors/:name"}
              render={({ match, history }) => {
                if (!user) return <Redirect to="/" />;
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col xs={12} md={10}>
                    <DirectorView
                      movies={movies}
                      director={
                        movies.find(
                          (m) => m.Director.Name === match.params.name
                        ).Director
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
            <Route
              path={"/genres/:name"}
              render={({ match, history }) => {
                if (!user) return <Redirect to="/" />;
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;
                // console.log(movies[0].Genre.Name.join(","));
                return (
                  <Col xs={12} md={10}>
                    <GenreView
                      movies={movies}
                      genre={
                        movies.find(
                          (m) => m.Genre.Name.join(",") === match.params.name
                        ).Genre
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
          </Row>
        </Container>
      </Router>
    );
  }
}
