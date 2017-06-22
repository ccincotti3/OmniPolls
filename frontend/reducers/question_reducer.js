import {RECEIVE_ALL_GROUPS} from '../actions/group_actions';
import merge from 'lodash/merge';


const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      newState.questions = merge({}, newState.questions, action.questions);
      return newState;
    default:
      return state;
  }
};

export default questionReducer;
