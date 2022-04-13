// movie-card is a child component of main-view

import React from 'react';
import propTypes from 'prop-types';


export class MovieCard extends React.Component {
  render() {
    // extracting the prop
    // movieData is the prop name
    const { movieData, onMovieClick } = this.props;

    return (
      <div onClick={() => onMovieClick(movieData)} className="movie-card">{movieData.Title}</div>
    );
  }
}


/*MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};*/


MovieCard.propTypes = {
  movie: propTypes.shape({
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    ImagePath: propTypes.string.isRequired
  }).isRequired,
  onMovieClick: propTypes.func.isRequired
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




