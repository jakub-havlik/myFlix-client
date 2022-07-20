// movie-view is a child component of movie-card

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

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

  // check if the current movie is in the list of the favorites already
  // you can also get the username from localstorage not just from props
  componentDidMount() {
    //console.log(localStorage.getItem("user"));
    document.addEventListener("keypress", this.keypressCallback);
    axios.get(`https://listapeli.herokuapp.com/users/${localStorage.getItem("user")}/movies`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then(res => {
        this.setState({
          hasBeenAddedToFavorites: res.data.includes(this.props.movie._id)
        })
      }).catch(err => {

      })
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.keypressCallback);
  }

  _addMovieToFavorites() {
    this.setState({
      isLoading: true,
    });

    this.props
      .addMovieToFavorites(this.props.movie._id)
      .then((res) => {
        this.setState({
          isLoading: false,
          hasBeenAddedToFavorites: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    const { movie, onBackClick } = this.props;
    //console.log(movie);

    // if movie has multiple genres change label "Genre:" to "Genres:"
    const genrePlural = [];
    if (movie.Genre.Name.length === 1) {
      genrePlural.push(<span>Genre:</span>);
    } else {
      genrePlural.push(<span>Genres:</span>);
    }


    // a list of genres of the selected movie - each one links to its definition
    // make sure the last item of the array of genres has no comma behing it
    const items = [];
    let comma = "";
    for (const [index, value] of movie.Genre.Name.entries()) {
      //console.log(movie.Genre.Name.length);
      if (index != movie.Genre.Name.length - 1) {
        comma = ",";
      } else {
        comma = "";
      }
      //console.log(index);
      items.push(
        <span>
          <Link to={`/genres/${value}`}>{value}</Link>
          {comma}{" "}
        </span>
      );
    }

    return (
      <div className="movie-view" style={{ color: "white" }}>
        <Button
          className="mr-3"
          variant="link"
          onClick={() => {
            onBackClick(null);
          }}
        >
          <span style={{ fontSize: "20px" }}>←</span> Back
        </Button>
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
          <Link to={`/directors/${movie.Director.Name}`}>
            {movie.Director.Name}
          </Link>
        </div>
        <div className="movie-actors">
          <span className="label">Actors: </span>
          <span className="value">{movie.Actors.join(", ")}</span>
        </div>
        <div className="movie-genre">
          <span className="label">{genrePlural} </span>
          {/*here the values pushed to the array "items" are returned*/}
          {/*see the for-loop above*/}
          {items}
        </div>

        <Button
          className="mt-4"
          variant="primary"
          type="submit"
          disabled={this.state.isLoading || this.state.hasBeenAddedToFavorites}
          onClick={() => {
            this._addMovieToFavorites();
          }}
        >
          {this.state.hasBeenAddedToFavorites ? "Added To Favorites" : ""}
          {this.state.isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Adding...
            </>
          ) : (
            ""
          )}
          {!this.state.hasBeenAddedToFavorites && !this.state.isLoading
            ? "Add to favorites"
            : ""}
        </Button>
      </div>
    );
  }
}
