import * as APIUtil from '../util/response_api_util';

export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const CLEAR_RESPONSE = 'CLEAR_RESPONSE';
import { receiveErrors } from './error_actions';
import { fetchPossibleResponses } from './possible_response_actions';

export const receiveResponse = (response) => ({
    type: RECEIVE_RESPONSE,
    response
});

export const clearResponse = (response) => ({
    type: CLEAR_RESPONSE,
    response
});

export const createResponse = (response_params) => dispatch => (
  APIUtil.createResponse(response_params).then(response => (
    dispatch(receiveResponse(response))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteResponse = (possible_response_id) => dispatch => (
  APIUtil.deleteResponse(possible_response_id).then(response => (
    dispatch(clearResponse(response))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
