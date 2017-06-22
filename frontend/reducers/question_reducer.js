import {RECEIVE_ALL_GROUPS} from '../actions/group_actions';
import merge from 'lodash/merge';

const defaultState = {
  questions: {},
};

const questionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      debugger;
      newState.questions = merge({}, newState.questions, action.questions);
      return newState;
    default:
      return state;
  }
};

export default questionReducer;
