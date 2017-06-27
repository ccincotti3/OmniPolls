import { RECEIVE_ACTIVE, CLEAR_ACTIVE } from '../actions/active_actions';
import merge from 'lodash/merge';


const activeReducer = (state = {id: -1}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVE:
      return {id: action.questionId};
    case CLEAR_ACTIVE:
      return {id: -1};
    default:
      return state;
  }
};

export default activeReducer;
