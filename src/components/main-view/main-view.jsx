// main-view is the root component
// it imports other components

import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// react redux
import { connect } from "react-redux";
import { setMovies, setUser } from "../../actions/actions";
// import child components
import MoviesList from "../movies-list/movies-list";
import { MenuBar } from "../menubar/menubar";
import { LoginView } from "../login-view/login-view";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
// styling
import "./main-view.scss";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      // Set initial user state to null, used for user login --> Default is logged out
      user: null,
    };
    this.addMovieToFavorites = this.addMovieToFavorites.bind(this);
  }

  addMovieToFavorites(movieId) {
    return axios.post(
      `https://listapeli.herokuapp.com/users/${this.state.user}/movies/${movieId}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  }

  // When token is present (user is logged in), get list of movies
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get("https://listapeli.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        /* instead of passing the movies to the state we pass movies to the props */
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  render() {
    // movies is extracted from this.props rather than from this.state
    let { movies } = this.props;
    let { user } = this.state;

    return (
      <div>
        <MenuBar user={user} />
        <Container>
          <Row className="main-view justify-content-md-center">
            <Route
              exact
              path="/"
              render={() => {
                /* If there is no user, the LoginView is rendered */
                /* If there is a user logged in, the user details are *passed as a prop to the LoginView */
                if (!user)
                  return (
                    <Col md={6}>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0)
                  return (
                    <div className="d-flex justify-content-center mt-5">
                      <div
                        className="spinner-border text-light"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  );
                return <MoviesList movies={movies} />;
              }}
            />

            {/* The rest of routes */}

            <Route
              path="/register"
              render={() => {
                if (user) return <Redirect to="/" />;
                return (
                  <Col xs={12} md={8}>
                    <RegistrationView />
                  </Col>
                );
              }}
            />

            <Route
              path="/movie/:movieId"
              render={({ match, history }) => {
                return (
                  <Col xs={12} md={10}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.movieId)}
                      onBackClick={() => history.goBack()}
                      addMovieToFavorites={this.addMovieToFavorites}
                    />
                  </Col>
                );
              }}
            />

            <Route
              exact
              path="/profile"
              render={({ history }) => {
                if (!user) {
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                }
                return (
                  <Col md={8}>
                    <ProfileView
                      movies={movies}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path={"/directors/:name"}
              render={({ match, history }) => {
                if (!user) return <Redirect to="/" />;
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col xs={12} md={10}>
                    <DirectorView
                      movies={movies}
                      director={
                        movies.find(
                          (m) => m.Director.Name === match.params.name
                        ).Director
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path={"/genres/:name"}
              render={({ match, history }) => {
                if (!user) return <Redirect to="/" />;
                // If movie list is empty (while movies load from API), display empty page
                if (movies.length === 0) return <div className="main-view" />;
                //console.log(movies[0].Genre.Name.join(","));

                let genre;
                let desc;
                movies.find((m) => {
                  let result;
                  let ii = 0;
                  m.Genre.Name.forEach((e) => {
                    if (e === match.params.name) {
                      genre = e;
                      desc = m.Genre.Description[ii];
                    }
                    ii++;
                  });
                });

                return (
                  <Col xs={12} md={10}>
                    <GenreView
                      movies={movies}
                      genreName={genre}
                      genreDesc={desc}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

// mapping the state of this component to its props
let mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch(setUser(user));
    },
    setMovies: (movies) => {
      dispatch(setMovies(movies));
    },
  };
};

// connect function connects this component to the store
// the movies state is extracted from the store through the connect() function
// then, it is passed as the movies prop for the MainView component
// connect() function is a HOC (higher-order component)
// it takes a component and returns a new component
export default connect(mapStateToProps, mapDispatchToProps)(MainView);
