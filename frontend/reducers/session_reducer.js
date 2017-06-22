import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState  = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, defaultState, { currentUser } );
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, { errors });
    case CLEAR_ERRORS:
      return merge({}, defaultState, { errors: [] });
    default:
      return state;
  }
};


export default sessionReducer;
