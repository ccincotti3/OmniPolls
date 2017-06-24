import * as APIUtil from '../util/question_api_util';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const DELETE_QUESTIONS = 'DELETE_QUESTIONS';
import { receiveErrors } from './error_actions';
import { fetchGroups } from './group_actions';

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const deleteQuestions = (ids) => ({
    type: DELETE_QUESTIONS,
    ids
})

export const createQuestion = (question) => dispatch => (
  APIUtil.createQuestion(question).then(question => {
    dispatch(receiveQuestion(question));
    window.location.href = `/#/polls/${question.id}`;
  }
  ), err => (dispatch(receiveErrors(err.responseJSON))
));

export const updateQuestion = (question) => dispatch => (
  APIUtil.updateQuestion(question).then(question => (
    dispatch(receiveQuestion(question))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteQuestion = (question) => dispatch => (
  APIUtil.deleteQuestion(question).then(ids => (
    dispatch(fetchGroups())
  ), err => (dispatch(receiveErrors(err.responseJSON))
))
);
