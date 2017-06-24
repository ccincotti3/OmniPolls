import { RECEIVE_GROUP, RECEIVE_ALL_GROUPS, DELETE_GROUPS } from '../actions/group_actions';
import { RECEIVE_QUESTION, DELETE_QUESTIONS } from '../actions/question_actions';
import merge from 'lodash/merge';

const groupReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return merge({}, action.groups);
    case RECEIVE_GROUP:
      const newGroup = {[action.group.id]: action.group};
      return merge({}, state, newGroup);
    case RECEIVE_QUESTION:
      debugger
      newState[action.question.group_id].questions_array.push(action.question.id);
      return newState;
    case DELETE_GROUPS:
      action.ids.forEach(id => {
        delete newState[id];
      });
      return newState;
    case DELETE_QUESTIONS:
    let newQuestionsArray = [];
    debugger

      action.ids.forEach(id => {
        if (newState.questions_array.includes(id)) {
          newQuestionsArray.push(id);
        }
      });
      return merge({}, newState, {['questions_array']: newQuestionsArray});
    default:
      return state;
  }
};

export default groupReducer;
