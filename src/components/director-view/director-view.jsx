import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';


export function DirectorView(props) {

  ///////////// ??????????????
  // should I define an array or an object here?
  const items = [];
  if (props.director.Death != "") {
    items.push(
      <span>† {props.director.Death}</span>
    );
  }



  return (
    <div className="director-view" style={{ color: 'white' }}>

      <div>
        <h1 className="display-4">{props.director.Name}</h1>
      </div>
      <div>
        <span className="value">* {props.director.Birth}</span>
      </div>
      <div>{items}</div>
      <div>
        <span className="value">{props.director.Bio}</span>
      </div>
      <br />
      <div>
        <h4>other movies by {props.director.Name}:</h4>
      </div>

      <Row className="justify-content-md-center">
        {props.movies.filter(m => m.Director.Name === props.director.Name).map(m => (
          <Col xs={12} sm={6} md={4} className="d-flex" key={m._id}>
            <MovieCard movie={m} />
          </Col>
        ))}
      </Row>

      <Link to={"/"}>
        <Button variant="outline-light">Back to full list</Button>
      </Link>

    </div>
  )
}