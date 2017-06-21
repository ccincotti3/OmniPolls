import * as APIUtil from '../util/group_api_util';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveAllGroup = (groups) => ({
  type: RECEIVE_ALL_GROUPS,
  groups
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group).then(group => (
    dispatch(receiveGroup(group))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateGroup = (group) => dispatch => (
  APIUtil.updateGroup(group).then(group => (
    dispatch(receiveGroup(group))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchGroups = () => dispatch => (
  APIUtil.fetchGroup().then(groups => (
    dispatch(receiveAllGroups(groups))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteGroup = (group) => dispatch => (
  APIUtil.deleteGroup(group).then(group => (
    dispatch(receiveGroup(group))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);
