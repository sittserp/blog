import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  blog: blogReducer,
  comment: commentReducer
});
