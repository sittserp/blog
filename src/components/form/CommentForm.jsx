import React, { useState } from 'react';
import { createComment } from '../../actions/commentActions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const CommentForm = ({ postIndex }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createComment({ title, body }, postIndex));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Comment Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <input
        type="text"
        placeholder="Comment Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
      <button>Post Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  postIndex: PropTypes.number.isRequired
};

export default CommentForm;
