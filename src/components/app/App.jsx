import React from 'react';
import BlogList from '../blogs/BlogList';
import CommentList from '../comments/commentList';
import BlogForm from '../form/BlogForm';

export default function App() {
  return (
    <>
      <h1>Bloglify</h1>
      <BlogForm />
      <BlogList />
    </>
  );
}
