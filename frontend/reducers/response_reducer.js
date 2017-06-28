import { RECEIVE_RESPONSE, CLEAR_RESPONSE } from '../actions/response_actions';
import merge from 'lodash/merge';

const responseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESPONSE:
      return merge({}, state, action.response);
    case CLEAR_RESPONSE:
      return {};
    default:
      return state;
  }

};

export default responseReducer;
