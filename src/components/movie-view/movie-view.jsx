// movie-view is a child component of movie-card

import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasBeenAddedToFavorites: false,
    };
  }


  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }


  _addMovieToFavorites() {
    this.setState({
      isLoading: true,
    });

    this.props.addMovieToFavorites(this.props.movie._id).then((response) => {
      this.setState({
        isLoading: false,
        hasBeenAddedToFavorites: true
      });
    })
  }



  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view" style={{ color: 'white' }}>
        <Button className="mr-3" variant="link" onClick={() => {
          onBackClick(null);
        }}><span style={{ fontSize: '20px' }}>←</span> Back</Button>
        <div className="movie-poster d-flex justify-content-center">
          <img alt={movie.Title} src={movie.ImagePath} width="400" />
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

        <Button className="mt-4" variant="primary" type="submit" disabled={this.state.isLoading || this.state.hasBeenAddedToFavorites} onClick={() => {
          this._addMovieToFavorites()
        }}>
          {this.state.hasBeenAddedToFavorites ? 'Added To Favorites' : ''}
          {this.state.isLoading ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Adding...</> : ''}
          {!this.state.hasBeenAddedToFavorites && !this.state.isLoading ? 'Add to favorites' : ''}
        </Button>

      </div>
    );
  }
}