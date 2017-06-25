// possible_responses_params =
// {possible_responses: [{possible_response_name: 'hi', question_id: 1},
// {possible_response_name: "no", question_id: 1}]}

import * as APIUtil from '../util/possible_response_api_util';
import { receiveErrors } from './error_actions';
import { receiveQuestion } from './question_actions'

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
