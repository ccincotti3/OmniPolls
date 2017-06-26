import * as APIUtil from '../util/response_api_util';

export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
import { receiveErrors } from './error_actions';

export const receiveResponse = (response) => ({
    type: RECEIVE_RESPONSE,
    response
});

export const createResponse = (response_params) => dispatch => (
  APIUtil.createResponse(response_params).then(response => (
    dispatch(receiveResponse(response))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
