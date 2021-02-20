export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment, postIndex) => ({
  type: CREATE_COMMENT,
  payload: { comment, postIndex }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = ({ title, postIndex }) => ({
  type: DELETE_COMMENT,
  payload: { title, postIndex }
});
