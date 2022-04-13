<<<<<<< Updated upstream
import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
=======
// movie-card is a child component of main-view

import React from 'react';
import PropTypes from 'prop-types';


export class MovieCard extends React.Component {
  render() {
    // extracting the prop
    // movieData is the prop name
    const { movieData, onMovieClick } = this.props;

    return (
      <div onClick={() => onMovieClick(movieData)} className="movie-card">{movieData.Title}</div>
>>>>>>> Stashed changes
    );
  }
}

<<<<<<< Updated upstream
=======

/*MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};*/


>>>>>>> Stashed changes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
<<<<<<< Updated upstream
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
=======
    ImagePath: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

/*MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.array.isRequired
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};*/




>>>>>>> Stashed changes
