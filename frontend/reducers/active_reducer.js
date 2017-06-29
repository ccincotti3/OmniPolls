import { RECEIVE_ACTIVE, CLEAR_ACTIVE } from '../actions/active_actions';
import merge from 'lodash/merge';


const activeReducer = (state = {question: {body: "", id: -1}}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVE:
      if (action.question) {
        return {question: action.question};
      } else {
        return {question: {body: "", id: -1}};
      };
    case CLEAR_ACTIVE:
      return {question: {body: "", id: -1}};
    default:
      return state;
  }
};

export default activeReducer;
