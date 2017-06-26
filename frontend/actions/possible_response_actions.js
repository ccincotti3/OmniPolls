import * as APIUtil from '../util/possible_response_api_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";


export const receiveResponses = (responses) => ({
  type: RECEIVE_RESPONSES,
  responses
});

export const createResponses = (responses_params) => dispatch => (
  APIUtil.CreatePossibleResponses(responses_params).then(responses => (
    dispatch(receiveResponses(responses))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchPossibleResponses = (question_id) => dispatch => (
  APIUtil.fetchPossibleResponses(question_id).then(responses => (
    dispatch(receiveResponses(responses))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
