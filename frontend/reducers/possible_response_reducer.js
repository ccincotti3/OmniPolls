import { RECEIVE_RESPONSES } from '../actions/possible_response_actions';
import { RECEIVE_RESPONSE, CLEAR_RESPONSE } from '../actions/response_actions';
import merge from 'lodash/merge';

const possibleResponseReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RESPONSES:
      return action.responses;
    case RECEIVE_RESPONSE:
      newState[action.response.possible_response_id].response_count++;
      return merge({}, newState);
    case CLEAR_RESPONSE:
      newState[action.response.possible_response_id].response_count--;
      return newState;
    default:
      return state;
  }
};


export default possibleResponseReducer;
