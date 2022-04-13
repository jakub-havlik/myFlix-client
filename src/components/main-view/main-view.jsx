// main-view is the root component

import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {

  constructor() {
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
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

  /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  /* You should also update the onLoggedIn function to save the token to the localstorage*/

  onLoggedIn(user, token) {
    this.setState({
      user
    });
    localStorage.setItem('token', token);
    localStorage.setItem('userId', user);
  }


  render() {
    const { movies, selectedMovie, user } = this.state;

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={(user, token) => this.onLoggedIn(user, token)} />;

    // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
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
  }


}














