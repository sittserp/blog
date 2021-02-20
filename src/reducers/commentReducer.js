import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case CREATE_COMMENT: 
      return { 
        ...state, 
        [action.payload.postIndex]: [ 
          ...(state[action.payload.postIndex] || []), 
          action.payload.comment
        ] 
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: state[action.payload.postIndex]
          .filter(item => item.title !== action.payload.title)
      };
    default:
      return state;
  }
}
