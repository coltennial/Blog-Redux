import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const BlogPost = ({blogs}) => (
  <ul>
    { 
      blogs.map(blog => (
        <Blog key={blog.id} {...blog} />
    ))
    }
  </ul>
)

const mapStateToProps = (state) => {
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogPost);