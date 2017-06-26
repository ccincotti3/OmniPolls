import { RECEIVE_RESPONSE } from '../actions/response_actions';
import merge from 'lodash/merge';

const responseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESPONSE:
      return merge({}, state, action.response);
    default:
      return state;
  }

};

export default responseReducer;
