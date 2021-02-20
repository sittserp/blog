import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';
import CommentForm from '../form/CommentForm';
import CommentList from '../../components/comments/CommentList';

const Blog = ({ title, body, index }) => {
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

      <CommentForm postIndex={index} />
      <CommentList postIndex={index} />
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Blog;
