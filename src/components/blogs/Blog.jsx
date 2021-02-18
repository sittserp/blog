import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/BlogProvider';
import { deleteBlog } from '../../actions/blogActions';

const Blog = ({ title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <>
      <dl>
        <dt>{title}</dt>
        <dd>{body}</dd>
      </dl>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Blog;
