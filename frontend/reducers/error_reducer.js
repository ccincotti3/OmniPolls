import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const defaultState = {
  errors: []
};

const errorReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, { errors });
    case CLEAR_ERRORS:
      return merge({}, defaultState, { errors: [] });
    default:
    return state;
  }
}

export default errorReducer;
