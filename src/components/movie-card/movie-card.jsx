import React from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { Title, ImagePath, _id } = movie;
    return (
      <Card className="mb-4">
        <Link to={`/movie/${_id}`}>
          <Card.Img loading="lazy" variant="top" title={Title} src={ImagePath} width="400" alt={Title} />
        </Link>
      </Card>
    );
  }
}


MovieCard.propTypes = {
  movie: propTypes.shape({
    Title: propTypes.string.isRequired,
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

