import { SELECT_ELEMENT, DESELECT_ELEMENT } from '../actions/selection_actions';
import merge from 'lodash/merge';

const selectionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_ELEMENT:
      return merge({}, state, {[action.element_type]: { [action.element.id]: action.element} })
    case DESELECT_ELEMENT:
        debugger
      const newState = merge({}, state);
      delete newState[action.element_type][action.element.id];
      return newState;
    default:
      return state;
  }
}

export default selectionReducer
