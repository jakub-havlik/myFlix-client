// movie-view is a child component of movie-card

import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {


  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }



  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster d-flex justify-content-center">
          <img src={movie.ImagePath} width="400" />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-release-year">
          <span className="label">Release Year: </span>
          <span className="value">{movie.ReleaseYear}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span>
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{movie.Actors.join(', ')}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre(s): </span>
          <span className="value">{movie.Genre.Name.join(', ')}</span>
          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
        <Button id="movie-view-button" onClick={() => { }}>Add to favorites</Button>

      </div>
    );
  }
}
