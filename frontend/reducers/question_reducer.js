import { RECEIVE_ALL_GROUPS } from '../actions/group_actions';
import { RECEIVE_QUESTION, DELETE_QUESTIONS, RECEIVE_NEW_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return merge({}, newState, action.questions);
    case RECEIVE_NEW_QUESTION:
      newState[action.question.id] = action.question;
      return newState;
    case RECEIVE_QUESTION:
      newState[action.question.id] = action.question;
      return newState;
    case DELETE_QUESTIONS:
      action.ids.forEach(id => {
        delete newState[id];
      });
      return newState;
    default:
      return state;
  }
};

export default questionReducer;
