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
      <p onClick={() => dispatch({type: 'REMOVE_BLOG', id})}> Remove </p>
      <p onClick={() => dispatch({type: 'EDIT_BLOG', id})}> Edit </p>
  </div>
)

export default connect()(Blog);
