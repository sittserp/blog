import React, { useState } from 'react';
import { createBlog } from '../../actions/blogActions';
import { useDispatch } from '../../state/BlogProvider';

const BlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createBlog({ title, body }));
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />

      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />
    </form>
  );
};

export default BlogForm;
