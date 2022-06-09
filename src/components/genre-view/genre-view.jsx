import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";


export function GenreView(props) {
  //console.log(props);

  return (
    <div className="genre-view" style={{ color: 'white' }}>

      <div>
        <h1 className="display-4">{props.genre.Name}</h1>
      </div>
      <div>
        <span className="value">{props.genre.Description}</span>
      </div>
      <br />
      <div>
        <h4>other movies in this genre:</h4>
      </div>

      <Row className="justify-content-md-center">
        {props.movies
          // here you can specify how you want to filter "other movies in this genre:"

          // display movies which contain all the genres in the array of genres
          //.filter((m) => m.Genre.Name === props.genre.Name)

          // display movies which contain just one of genres from the array of genres
          .filter((m) => {
            for (var i = 0; i < m.Genre.Name.length; i++) {
              if (m.Genre.Name[i] == props.genre.Name) {
                return true;
              }
            }
          })

          .map((m) => (
            <Col xs={12} sm={6} md={4} className="d-flex" key={m._id}>
              <MovieCard movie={m} />
            </Col>
          ))}

      </Row>

      <Link to={"/"}>
        <Button variant="outline-light">Back to full list</Button>
      </Link>

    </div>
  );

}
