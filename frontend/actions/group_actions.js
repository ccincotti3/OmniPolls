import * as APIUtil from '../util/group_api_util';
import { receiveErrors } from './error_actions'
import { updateQuestion } from './question_actions'
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const DELETE_GROUPS = 'DELETE_GROUPS';
export const RECEIVE_UNGROUPED_ID = 'RECEIVE_UNGROUPED_ID';

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveAllGroups = ({groups, questions}) => ({
  type: RECEIVE_ALL_GROUPS,
  groups,
  questions
});

export const receiveUngroupedId = (id) => ({
  type: RECEIVE_UNGROUPED_ID,
  id
})

export const deleteGroups = (ids) => ({
    type: DELETE_GROUPS,
    ids
})

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
  APIUtil.fetchGroups().then(obj => (
    dispatch(receiveAllGroups(obj))
  ), err => (dispatch(receiveErrors(err.responseJSON))
))
);

export const deleteGroup = (group) => dispatch => (
  APIUtil.deleteGroup(group).then(obj => (
    dispatch(deleteGroups(obj))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createGroupforGrouping = (group, questions) => dispatch => (
  APIUtil.createGroup(group).then(group => {
    dispatch(receiveGroup(group))

    questions.forEach((question) => {
      question['group_id']= group.id
      dispatch(updateQuestion(question))
    })


  }, err => (dispatch(receiveErrors(err.responseJSON))
).then(
  dispatch(fetchGroups())
))
);
