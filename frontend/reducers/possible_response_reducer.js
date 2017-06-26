import { RECEIVE_RESPONSES } from '../actions/possible_response_actions';
import merge from 'lodash/merge';

const possibleResponseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESPONSES:
      return action.responses;
    default:
      return state;
  }
}


export default possibleResponseReducer;
