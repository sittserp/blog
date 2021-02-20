import React from 'react';
import { getBlogs } from '../../selectors/blogSelectors';
import { useSelector } from 'react-redux';
import Blog from './Blog';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogElements = blogs.map((blog, index) => (
    <li key={index}>
      <Blog index={index} {...blog} />
    </li>
  ));

  return (
    <ul>
      {blogElements}
    </ul>
  );
};

export default BlogList;
