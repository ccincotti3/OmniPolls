import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS} from '../actions/group_actions';
import merge from 'lodash/merge';

const groupReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return action.groups;
    case RECEIVE_GROUP:
      const newGroup = {[action.group.id]: action.group};
      return merge({}, state, newGroup);
    default:
      return state;
  }
};

export default groupReducer;
