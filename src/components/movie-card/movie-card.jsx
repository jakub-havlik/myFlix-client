import React from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardGroup,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Figure,
} from "react-bootstrap";
// styling
import "./movie-card.scss";


export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { Title, ImagePath, _id } = movie;
    return (

      <Figure className="movie-figure">
        <Link to={`/movie/${_id}`}>
          <Figure.Image
            loading="lazy"
            variant="top"
            title={Title}
            src={ImagePath}
            alt={Title}
          />
        </Link>
      </Figure>

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


