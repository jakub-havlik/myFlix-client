// src/components/movies-list/movies-list.jsx
// VisibilityFilterInput is a sub-component of this component

import React from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
// react redux
import { connect } from 'react-redux';
// import components
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
// styling
//import "./movies-list.scss";


const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view" />;

  return <>
    <Col md={12} style={{ margin: '1em' }}>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    </Col>
    {filteredMovies.map(m => (
      <Col xs={12} md={6} lg={3} key={m._id} className="movie-poster">
        <MovieCard movie={m} />
      </Col>
    ))}
  </>;
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      filter: PropTypes.func
    })
  ),
  visibilityFilter: PropTypes.string
};


// connect function connects this component to the store
export default connect(mapStateToProps)(MoviesList);