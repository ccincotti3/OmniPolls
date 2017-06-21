import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS, RECEIVE_ERRORS } from '../actions/group_actions';
import merge from 'lodash/merge';

const defaultState = {
  groups: {},
  errors: []
};

const groupReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      newState.groups = merge({}, newState.groups, action.groups);
      return newState;
    case RECEIVE_GROUP:
      newState = action.group;
      return merge({}, state.groups, newState);
    case RECEIVE_ERRORS:
      newState = action.errors;
      return merge({}, state.errors, newState);
    default:
      return state;
  }
};

export default groupReducer;
