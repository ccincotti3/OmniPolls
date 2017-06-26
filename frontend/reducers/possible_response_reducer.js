import { RECEIVE_RESPONSES } from '../actions/possible_response_actions';
import { RECEIVE_RESPONSE } from '../actions/response_actions';
import merge from 'lodash/merge';

const possibleResponseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESPONSES:
      return action.responses;
    case RECEIVE_RESPONSE:
      const newState = merge({}, state);
      debugger
      newState[action.response.possible_response_id].response_count++;
      return newState;
    default:
      return state;
  }
};


export default possibleResponseReducer;
