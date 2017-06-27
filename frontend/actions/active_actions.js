export const RECEIVE_ACTIVE = "RECEIVE_ACTIVE";
export const CLEAR_ACTIVE = "CLEAR_ACTIVE";
import { receiveErrors } from "./error_actions";
import * as APIUtil from '../util/active_api_util';

export const receiveActive = (active) => ({
  type: RECEIVE_ACTIVE,
  question: active.question,
  username: active.username,
});

export const clearActive = () => ({
  type: CLEAR_ACTIVE,
});

export const updateActive = (active) => dispatch => (
  APIUtil.updateActive(active).then(active => {
    if(active.question){
      dispatch(receiveActive(active));
    }
    else {
      dispatch(clearActive());
    }
  }
  ), err => (dispatch(receiveErrors(err.responseJSON))
  )
);

export const fetchActive = (user) => dispatch => (
  APIUtil.fetchActive(user).then(active => {
    if(active.question){
      dispatch(receiveActive(active));
    }
    else {
      dispatch(clearActive());
    }
  }
  ), err => (dispatch(receiveErrors(err.responseJSON))
)
);
