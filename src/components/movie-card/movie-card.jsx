// movie-card is a child component of main-view

import React from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class MovieCard extends React.Component {
  render() {
    // extracting the prop
    // movieData is the prop name
    const { movieData, onMovieClick } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movieData.ImagePath} />
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
          <Button onClick={() => onMovieClick(movieData)} variant="link">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}




MovieCard.propTypes = {
  movieData: propTypes.shape({
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




