// movie-card is a child component of main-view

import React from 'react';
<<<<<<< Updated upstream
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

export class MovieCard extends React.Component {
  render() {
    // extracting the prop
    // movieData is the prop name
    //const { movieData } = this.props;
    const { movie } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
<<<<<<< Updated upstream


=======
=======
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { Title, Description, ImagePath, _id } = movie;
    return (
      <Card className="mb-4">
        <Link to={`/movie/${_id}`}>
          <Card.Img loading="lazy" variant="top" title={Title} src={ImagePath} width="400" alt={Title} />
        </Link>
      </Card>
    );
  }
}
>>>>>>> Stashed changes


MovieCard.propTypes = {
  movie: propTypes.shape({
    Title: propTypes.string.isRequired,
<<<<<<< Updated upstream
    Description: propTypes.string.isRequired,
    ImagePath: propTypes.string.isRequired
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




=======
    ReleaseYear: propTypes.string.isRequired,
    Description: propTypes.string.isRequired,
    Director: propTypes.shape({
      Name: propTypes.string.isRequired,
    }).isRequired,
    Actors: propTypes.array.isRequired,
    Genre: propTypes.shape({
      Name: propTypes.array.isRequired,
    }).isRequired,
    ImagePath: propTypes.string.isRequired
  }).isRequired
};

>>>>>>> Stashed changes
>>>>>>> Stashed changes
