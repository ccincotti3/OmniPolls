import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS} from '../actions/group_actions';
import merge from 'lodash/merge';

const defaultState = {
  groups: {},
};

const groupReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      debugger;
      newState.groups = merge({}, newState.groups, action.groups);
      return newState;
    case RECEIVE_GROUP:
      newState = action.group;
      return merge({}, state.groups, newState);
    default:
      return state;
  }
};

export default groupReducer;
