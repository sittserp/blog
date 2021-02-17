import React from 'react';
import { getBlogs } from '../../selectors/BlogSelectors';
import { useSelector } from '../../state/BlogProvider';
import Blog from './Blog';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogElements = blogs.map(blog => (
    <li key={blog.title}>
      <Blog {...blog} />
    </li>
  ));

  return (
    <ul>
      {blogElements}
    </ul>
  );
};

export default BlogList;
