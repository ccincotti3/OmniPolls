import * as APIUtil from '../util/question_api_util';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
import { receiveErrors } from './error_actions'

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const createQuestion = (question) => dispatch => (
  APIUtil.createQuestion(question).then(question => (
    dispatch(receiveQuestion(question))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateQuestion = (question) => dispatch => (
  APIUtil.updateQuestion(question).then(question => (
    dispatch(receiveQuestion(question))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteQuestion = (question) => dispatch => (
  APIUtil.deleteQuestion(question).then(question => (
    dispatch(receiveQuestion(question))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
