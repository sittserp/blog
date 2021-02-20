import React from 'react';
import { getComments } from '../../selectors/commentSelector';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const CommentList = ({ postIndex }) => {
  const comments = useSelector(getComments);
  const commentsArray = comments[postIndex] || [];

  const commentElements = commentsArray.map(comment => (
    <li key={comment.title}>
      <Comment {...comment} postIndex={postIndex}/>
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default CommentList;
