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
<<<<<<< Updated upstream
      <div className="movie-view">
<<<<<<< Updated upstream
        <div className="movie-poster d-flex justify-content-center">
          <img src={movie.ImagePath} width="400" />
=======
        <div className="movie-poster">
          <img alt="" width="400px" src={movie.ImagePath} />
=======
      <div className="movie-view" style={{ color: 'white' }}>
        <Button className="mr-3" variant="link" onClick={() => {
          onBackClick(null);
        }}><span style={{ fontSize: '20px' }}>←</span> Back</Button>
        <div className="movie-poster d-flex justify-content-center">
          <img alt={movie.Title} src={movie.ImagePath} width="400" />
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
<<<<<<< Updated upstream
        <button onClick={() => { onBackClick(null); }}>Back</button>
=======
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
>>>>>>> Stashed changes

        <Button className="mt-4" variant="primary" type="submit" disabled={this.state.isLoading || this.state.hasBeenAddedToFavorites} onClick={() => {
          this._addMovieToFavorites()
        }}>

          {this.state.hasBeenAddedToFavorites ? 'Added To Favorites' : ''}
          {this.state.isLoading ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Adding...</> : ''}
          {!this.state.hasBeenAddedToFavorites && !this.state.isLoading ? 'Add to favorites' : ''}
>>>>>>> Stashed changes

        </Button>
      </div>
    );
  }
}
