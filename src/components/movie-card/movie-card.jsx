// movie-card is a child component of main-view

import React from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

<<<<<<< Updated upstream
=======
import { Link } from "react-router-dom";

>>>>>>> Stashed changes

export class MovieCard extends React.Component {
  render() {
    // extracting the prop
    // movieData is the prop name
<<<<<<< Updated upstream
    const { movieData, onMovieClick } = this.props;
=======
    const { movieData } = this.props;
>>>>>>> Stashed changes

    return (
      <Card>
        <Card.Img variant="top" src={movieData.ImagePath} />
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
<<<<<<< Updated upstream
          <Button onClick={() => onMovieClick(movieData)} variant="link">Open</Button>
=======
          <Link to={`/movies/${movieData._id}`}>
            <Button variant="link">Open</Button>
          </Link>
>>>>>>> Stashed changes
        </Card.Body>
      </Card>
    );
  }
}




MovieCard.propTypes = {
<<<<<<< Updated upstream
  movieData: propTypes.shape({
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    ImagePath: propTypes.string.isRequired
=======
  movie: propTypes.shape({
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    ImagePath: propTypes.string.isRequired,
    Rating: propTypes.string.isRequired
>>>>>>> Stashed changes
  }).isRequired,
  onMovieClick: propTypes.func.isRequired
};


/*MovieCard.propTypes = {
<<<<<<< Updated upstream
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
=======
  movieData: propTypes.shape({
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    ImageURL: propTypes.string.isRequired,
    ReleaseYear: propTypes.string.isRequired,
    Genre: propTypes.shape({
      Name: propTypes.array.isRequired
    })
  }).isRequired,
  onMovieClick: propTypes.func.isRequired
>>>>>>> Stashed changes
};*/




