import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
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
// react redux
import { connect } from "react-redux";
import { remFavMovie } from "../../actions/actions";
// styling
import "./profile-view.scss";

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  getUser(token) {
    const Username = localStorage.getItem("user");

    axios
      .get(`https://listapeli.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: "",
          Email: response.data.Email,
          // you should get the Birthday value after the user data has been loaded from the backend
          Birthday: response.data.Birthday.split('T')[0],
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  editUser = (e) => {
    e.preventDefault();
    console.log(this.state);
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // this prevents from sending an empty password when updating other user data
    let payload = {};
    if (this.state.Password == "") {
      payload = {
        Username: this.state.Username,
        Email: this.state.Email,
        Birthday: this.state.Birthday,
      };
    } else {
      payload = {
        Username: this.state.Username,
        Password: this.state.Password,
        Email: this.state.Email,
        Birthday: this.state.Birthday,
      };
    }

    axios
      .put(`https://listapeli.herokuapp.com/users/${Username}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });

        localStorage.setItem("user", this.state.Username);
        alert("Profile updated");
        window.open("/profile", "_self");
      });
  };


  onRemoveFavorite = (e, movies) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .delete(
        `https://listapeli.herokuapp.com/users/${Username}/movies/${movies._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Movie removed");
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getBirthdayValue = () => {
    if (this.state.Birthday) return this.state.Birthday.split('T')[0]
    return ''
  }

  onDeleteUser() {
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");



    axios
      .delete(`https://listapeli.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        alert("Profile deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setUsername(value) {
    this.setState({
      Username: value,
    });
  }

  setPassword(value) {
    this.setState({
      Password: value,
    });
  }

  setEmail(value) {
    this.setState({
      Email: value,
    });
  }

  setBirthday(value) {
    this.setState({
      Birthday: value,
    });
  }



  render() {
    const { movies, onBackClick } = this.props;
    const { FavoriteMovies, Username, Email, Birthday } = this.state;

    return (
      <Container >
        <Row>
          <Col>
            <Card.Body className="profile-view-body">

              <Form
                className="update-form"
                onSubmit={(e) =>
                  this.editUser(
                    e,
                    this.Username,
                    this.Password,
                    this.Email,
                    this.Birthday
                  )
                }
              >
                <FormGroup>
                  <Form.Label>name</Form.Label>
                  <FormControl
                    type="text"
                    name="Username"
                    placeholder="New Username"
                    value={Username}
                    onChange={(e) => this.setUsername(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Form.Label>email</Form.Label>
                  <FormControl
                    type="email"
                    name="Email"
                    placeholder="Enter Email"
                    value={Email}
                    onChange={(e) => this.setEmail(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Form.Label>born</Form.Label>
                  <FormControl
                    type="date"
                    name="Birthday"
                    value={Birthday}
                    onChange={(e) => this.setBirthday(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Form.Label>new password?</Form.Label>
                  <FormControl
                    type="password"
                    name="Password"
                    placeholder="enter new password"
                    value={this.Password}
                    onChange={(e) => this.setPassword(e.target.value)}
                    required
                  />
                </FormGroup>

                <Card.Body className="buttons"  >



                  <Button
                    variant="success"
                    className="submit"
                    type="submit"
                    onClick={this.editUser}
                  >
                    update profile
                  </Button>

                  <Button
                    variant="danger"
                    className="delete"
                    onClick={() => this.onDeleteUser()}
                  >
                    delete profile
                  </Button>
                </Card.Body>

              </Form>
            </Card.Body>

          </Col>
        </Row>

        <Row>
          <Col>
            <Card.Body className="profile-view-body">
              {FavoriteMovies.length === 0 && (
                <div className="text-center">no favorite movies yet</div>
              )}
              <Row className="favorite-movies-container">
                {FavoriteMovies.length > 0 &&
                  movies.map((movie) => {
                    if (
                      movie._id ===
                      FavoriteMovies.find((fav) => fav === movie._id)
                    ) {

                      return (
                        <Col xs={12} md={6} lg={3} key={movie._id} className="favorite-movie-body">
                          <Figure>
                            <Figure.Image
                              className="favorite-movie-image"
                              variant="top"
                              src={movie.ImagePath}
                              alt={movie.Title}
                            />
                            {/*<Figure.Caption className="movie-title">{movie.Title}</Figure.Caption>*/}
                          </Figure>
                          <Button
                            className="remove-fav-btn"
                            value={movie._id}
                            onClick={(e) => this.onRemoveFavorite(e, movie)}
                          >
                            X
                          </Button>
                        </Col>
                      );

                    }
                  })}
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Container >
    );
  }
}

ProfileView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.array.isRequired,
        Description: PropTypes.array.isRequired,
      }).isRequired,
      Director: PropTypes.shape({
        Bio: PropTypes.string.isRequired,
        Birth: PropTypes.string.isRequired,
        Death: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { remFavMovie })(ProfileView);
