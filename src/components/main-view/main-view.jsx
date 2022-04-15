// main-view is the root component

import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
<<<<<<< Updated upstream
=======
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
>>>>>>> Stashed changes


export class MainView extends React.Component {

  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
<<<<<<< Updated upstream
      user: null,
      token: null
    };
  }

  /* Before making the movies request you should add the bearer token to the header*/

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      axios.get('https://listapeli.herokuapp.com/movies', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        this.setState({
          movies: response.data,
          token: token
        });
      }).catch(error => {
        console.log(error);
      });
    }
  }

=======
      user: null
    };
  }



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


  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }



>>>>>>> Stashed changes
  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
<<<<<<< Updated upstream
  /* You should also update the onLoggedIn function to save the token to the localstorage*/

  onLoggedIn(user, token) {
    this.setState({
      user
    });
    localStorage.setItem('token', token);
    localStorage.setItem('userId', user);
  }


=======

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }


  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }



>>>>>>> Stashed changes
  render() {
    const { movies, selectedMovie, user } = this.state;

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
<<<<<<< Updated upstream
    if (!user) return <LoginView onLoggedIn={(user, token) => this.onLoggedIn(user, token)} />;
=======
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
>>>>>>> Stashed changes

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
<<<<<<< Updated upstream
      <div className="main-view">
        {/*If the state of `selectedMovie` is not null, that selected movie will be returned otherwise, all *movies will be returned*/}
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movieData={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
          ))
        }
      </div>
    );
=======
      <Row className="main-view justify-content-md-center">
        <button onClick={() => { this.onLoggedOut() }}>Logout</button>
        {selectedMovie
          ? (
            <Col md={8}>
              <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
            </Col>
          )
          : movies.map(movie => (
            <Col md={3}>
              <MovieCard key={movie._id} movieData={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
            </Col>
          ))
        }
      </Row>
    );


>>>>>>> Stashed changes
  }


}














