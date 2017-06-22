import * as APIUtil from '../util/question_api_util';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const receiveAllQuestions = (questions) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
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

export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions().then(questions => (
    dispatch(receiveAllQuestions(questions))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteQuestion = (question) => dispatch => (
  APIUtil.deleteQuestion(question).then(question => (
    dispatch(receiveQuestion(question))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
