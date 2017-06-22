import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logIn = (user) => dispatch => (
  APIUtil.logIn(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logOut = () => dispatch => (
  APIUtil.logOut().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const signUp = (user) => dispatch => (
  APIUtil.signUp(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
