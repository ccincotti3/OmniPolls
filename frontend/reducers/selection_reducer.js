import { SELECT_ELEMENT, DESELECT_ELEMENT } from '../actions/selection_actions';
import { RECEIVE_UNGROUPED_ID } from '../actions/group_actions';
import merge from 'lodash/merge';

const selectionReducer = (state = {groups: {}, questions: {}, ungrouped_id: -1}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_ELEMENT:
      return merge({}, state, {[action.element_type]: { [action.element.id]: action.element} })
    case DESELECT_ELEMENT:
      const newState = merge({}, state);
      delete newState[action.element_type][action.element.id];
      return newState;
    case RECEIVE_UNGROUPED_ID:
      return merge({}, state, {ungrouped_id: action.id})
    default:
      return state;
  }
}

export default selectionReducer
