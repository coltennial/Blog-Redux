import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, complete, dispatch }) => (
  <div>
    <li
      onClick={() => dispatch({ type: 'TOGGLE_BLOG', id})}
      style={ complete ? {color: "white", backgroundColor: "black"} : {}}
    >
      {name}
    </li>
      <p> Remove </p>
  </div>
)

export default connect()(Blog);