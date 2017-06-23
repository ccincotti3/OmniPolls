import { SELECT_ELEMENT, DESELECT_ELEMENT } from '../actions/selection_actions';
import merge from 'lodash/merge';

const selectionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_ELEMENT:
      return merge({}, state, action.element)
    case DESELECT_ELEMENT:
      const newState = merge({}, state);
      delete newState[action.element];
      return newState;
    default:
      return state;
  }
}

export default selectionReducer
