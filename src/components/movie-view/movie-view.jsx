<<<<<<< Updated upstream
=======
// movie-view is a child component of movie-card

>>>>>>> Stashed changes
import React from 'react';

export class MovieView extends React.Component {

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
<<<<<<< Updated upstream
          <img alt="" width="400px" src={movie.ImagePath} />
=======
          <img src={movie.ImagePath} />
>>>>>>> Stashed changes
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
<<<<<<< Updated upstream
=======
        <div className="movie-release-year">
          <span className="label">Release Year: </span>
          <span className="value">{movie.ReleaseYear}</span>
        </div>
>>>>>>> Stashed changes
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
<<<<<<< Updated upstream
=======
        <div className="movie-director">
          <span className="label">Director: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{movie.Actors.join(', ')}</span>
        </div>
        <div className="movie-genre">
          <span className="label">Genre(s): </span>
          <span className="value">{movie.Genre.Name.join(', ')}</span>
        </div>
>>>>>>> Stashed changes
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
    );
  }
}
