import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ postIndex, title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment({ title, postIndex }));
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

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postIndex: PropTypes.number.isRequired
};

export default Comment;
