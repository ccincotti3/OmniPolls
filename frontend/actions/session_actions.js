import * as APIUtil from './util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors(errors) = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logIn = (user) => (
  APIUtil.logIn(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logOut = () => (
  APIUtil.logOut().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const signUp = (user) => (
  APIUtil.signUp(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
