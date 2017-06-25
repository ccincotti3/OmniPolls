import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';


const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors || ["The page you are looking for was not found"];
    case CLEAR_ERRORS:
      return [];
    default:
    return state;
  }
}

export default errorReducer;
