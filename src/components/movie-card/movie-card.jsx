// movie-card is a child component of main-view

import React from 'react';
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";


export class MovieCard extends React.Component {
  render() {
    // extracting the prop
    // movieData is the prop name
    const { movieData } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movieData.ImagePath} />
        <Card.Body>
          <Card.Title>{movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description}</Card.Text>
          <Link to={`/movies/${movieData._id}`}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}




MovieCard.propTypes = {
  movie: propTypes.shape({
    Title: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    ImagePath: propTypes.string.isRequired,
    Rating: propTypes.string.isRequired
  }).isRequired,
  onMovieClick: propTypes.func.isRequired
};


/*MovieCard.propTypes = {
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
};*/




