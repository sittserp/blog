import { SET_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_COMMENT: 
      return { ...state, comments: 
        [...state.comments, state.comments[action.payload.index]] };
    default:
      return state;
  }
}
