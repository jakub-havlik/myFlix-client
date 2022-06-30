// src/components/visibility-filter-input/visibility-filter-input.jsx
// this component is a sub-component of MoviesList

import React from 'react';
import Form from 'react-bootstrap/Form';
// react redux
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';
// styling
//import "./visibility-filter-input.scss";


function VisibilityFilterInput(props) {
  return <Form.Control
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="filter"
    type="text"
  />;
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput);